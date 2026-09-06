import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

import {
  BookingStatus,
  ChargerType,
  PaymentMethod,
  PaymentStatus,
  Prisma,
  PrismaClient,
  SlotStatus,
  StationStatus,
  UserRole,
} from "../src/generated/prisma/client";

import { ChargingStationsData } from "./data/chargingStationsData";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in the .env file.");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

/**
 * Convert frontend station status into Prisma StationStatus.
 *
 * Your Prisma enum only contains:
 * AVAILABLE, BUSY, MAINTENANCE, INACTIVE
 */
function mapStationStatus(status: string): StationStatus {
  switch (status) {
    case "Available":
      return StationStatus.AVAILABLE;

    case "Limited":
    case "Almost Full":
    case "Full":
      return StationStatus.BUSY;

    default:
      return StationStatus.INACTIVE;
  }
}

function mapChargerType(type: string): ChargerType {
  switch (type) {
    case "Normal":
      return ChargerType.NORMAL;

    case "Fast":
      return ChargerType.FAST;

    case "Ultra":
      return ChargerType.ULTRA;

    default:
      throw new Error(`Unknown charger type: ${type}`);
  }
}

function getChargerPrefix(type: string): string {
  switch (type) {
    case "Normal":
      return "N";

    case "Fast":
      return "F";

    case "Ultra":
      return "U";

    default:
      throw new Error(`Unknown charger type: ${type}`);
  }
}

function getPricePerKwh(type: string): string {
  switch (type) {
    case "Normal":
      return "2500.00";

    case "Fast":
      return "3750.00";

    case "Ultra":
      return "5500.00";

    default:
      throw new Error(`Unknown charger type: ${type}`);
  }
}

function createStationCode(stationId: number): string {
  return `ST${stationId.toString().padStart(2, "0")}`;
}

/**
 * Convert this frontend structure:
 *
 * {
 *   type: "Fast",
 *   total: 4,
 *   available: 2
 * }
 *
 * into four separate database slots:
 *
 * F01 AVAILABLE
 * F02 AVAILABLE
 * F03 OCCUPIED
 * F04 OCCUPIED
 */
function createSlotsForStation(
  stationId: number,
  chargingTypes: {
    type: "Normal" | "Fast" | "Ultra";
    power: number;
    total: number;
    available: number;
  }[],
) {
  const stationCode = createStationCode(stationId);

  return chargingTypes.flatMap((chargingType) => {
    const chargerPrefix = getChargerPrefix(
      chargingType.type,
    );

    return Array.from(
      { length: chargingType.total },
      (_, index) => {
        const slotNumber = index + 1;

        return {
          slotCode: `${stationCode}-${chargerPrefix}${slotNumber
            .toString()
            .padStart(2, "0")}`,

          chargerType: mapChargerType(
            chargingType.type,
          ),

          powerKw: chargingType.power,

          pricePerKwh: getPricePerKwh(
            chargingType.type,
          ),

          status:
            index < chargingType.available
              ? SlotStatus.AVAILABLE
              : SlotStatus.OCCUPIED,
        };
      },
    );
  });
}

type CreatedStationWithSlots =
  Prisma.ChargingStationGetPayload<{
    include: {
      slots: true;
    };
  }>;

async function main(): Promise<void> {
  console.log("Starting Voltra database seed...");

  /*
   * Delete old data in dependency order.
   *
   * Booking depends on User and ChargingSlot.
   * ChargingSlot depends on ChargingStation.
   */
  await prisma.$executeRawUnsafe(`
  TRUNCATE TABLE
    "bookings",
    "charging_slots",
    "charging_stations",
    "users"
  RESTART IDENTITY CASCADE;
`);

  console.log("Existing mock data removed.");

  const adminPasswordHash = await bcrypt.hash(
    "Admin123!",
    10,
  );

  const userPasswordHash = await bcrypt.hash(
    "User123!",
    10,
  );

  // ---------------------------------------
  // Users
  // ---------------------------------------

  const admin = await prisma.user.create({
    data: {
      fullName: "Voltra Administrator",
      email: "admin@voltra.com",
      passwordHash: adminPasswordHash,
      phoneNumber: "081234567890",
      role: UserRole.ADMIN,
    },
  });

  const robby = await prisma.user.create({
    data: {
      fullName: "Robby Arzy",
      email: "robby@example.com",
      passwordHash: userPasswordHash,
      phoneNumber: "081234567891",
      role: UserRole.USER,
    },
  });

  const maya = await prisma.user.create({
    data: {
      fullName: "Maya Pratama",
      email: "maya@example.com",
      passwordHash: userPasswordHash,
      phoneNumber: "081234567892",
      role: UserRole.USER,
    },
  });

  console.log(`Created admin user: ${admin.email}`);

  // ---------------------------------------
  // 20 charging stations and their slots
  // ---------------------------------------

  const createdStations: CreatedStationWithSlots[] = [];

  for (const mockStation of ChargingStationsData) {
    const createdStation =
      await prisma.chargingStation.create({
        data: {
          name: mockStation.name,
          location: mockStation.location,
          area: mockStation.area,
          address: mockStation.address,

          /*
           * Your frontend data currently has the coordinate
           * property names reversed:
           *
           * longitude contains -7.x
           * latitude contains 112.x
           *
           * Surabaya should use:
           * latitude  = -7.x
           * longitude = 112.x
           */
          latitude:
            mockStation.longitude.toString(),

          longitude:
            mockStation.latitude.toString(),

          description:
            `${mockStation.name} provides Normal, Fast, and Ultra EV charging services.`,

          status: mapStationStatus(
            mockStation.status,
          ),

          imageUrl: null,

          slots: {
            create: createSlotsForStation(
              mockStation.id,
              mockStation.chargingTypes,
            ),
          },
        },

        include: {
          slots: true,
        },
      });

    createdStations.push(createdStation);

    console.log(
      `Created ${createdStation.name} with ${createdStation.slots.length} slots.`,
    );
  }

  // ---------------------------------------
  // Find slots for bookings
  // ---------------------------------------

  const tunjunganFastSlot =
    await prisma.chargingSlot.findFirst({
      where: {
        slotCode: "ST01-F01",
      },
    });

  const pakuwonUltraSlot =
    await prisma.chargingSlot.findFirst({
      where: {
        slotCode: "ST05-U01",
      },
    });

  const galaxyFastSlot =
    await prisma.chargingSlot.findFirst({
      where: {
        slotCode: "ST10-F01",
      },
    });

  if (
    !tunjunganFastSlot ||
    !pakuwonUltraSlot ||
    !galaxyFastSlot
  ) {
    throw new Error(
      "One or more charging slots required for bookings were not created.",
    );
  }

  // ---------------------------------------
  // Bookings
  // ---------------------------------------

  await prisma.booking.createMany({
    data: [
      {
        userId: robby.id,
        slotId: tunjunganFastSlot.id,
        bookingCode: "VOL-202607-001",
        startTime: new Date(
          "2026-07-20T03:00:00.000Z",
        ),
        endTime: new Date(
          "2026-07-20T04:00:00.000Z",
        ),
        estimatedKwh: "30.00",
        estimatedCost: "112500.00",
        status: BookingStatus.CONFIRMED,
      },
      {
        userId: maya.id,
        slotId: pakuwonUltraSlot.id,
        bookingCode: "VOL-202607-002",
        startTime: new Date(
          "2026-07-21T06:00:00.000Z",
        ),
        endTime: new Date(
          "2026-07-21T06:45:00.000Z",
        ),
        estimatedKwh: "40.00",
        estimatedCost: "220000.00",
        status: BookingStatus.PENDING,
      },
      {
        userId: robby.id,
        slotId: galaxyFastSlot.id,
        bookingCode: "VOL-202607-003",
        startTime: new Date(
          "2026-07-10T02:00:00.000Z",
        ),
        endTime: new Date(
          "2026-07-10T03:00:00.000Z",
        ),
        estimatedKwh: "25.00",
        estimatedCost: "93750.00",
        status: BookingStatus.COMPLETED,
      },
    ],
  });

  // ---------------------------------------
  // Payments
  // ---------------------------------------
  const robbyBooking1 = await prisma.booking.findUnique({
    where: {
      bookingCode: "VOL-202607-001",
    },
  });

  const mayaBooking = await prisma.booking.findUnique({
    where: {
      bookingCode: "VOL-202607-002",
    },
  });

  const robbyBooking2 = await prisma.booking.findUnique({
    where: {
      bookingCode: "VOL-202607-003",
    },
  });

  if (!robbyBooking1 || !mayaBooking || !robbyBooking2) {
    throw new Error(
      "One or more bookings required for payments were not found.",
    );
  }

   await prisma.payment.createMany({
    data: [
      {
        bookingId: robbyBooking1.id,
        amount: "112500.00",
        paymentMethod: PaymentMethod.E_WALLET,
        status: PaymentStatus.PAID,
        transactionId: "VOL-PAY-001",
      },
      {
        bookingId: mayaBooking.id,
        amount: "220000.00",
        paymentMethod: PaymentMethod.CARD,
        status: PaymentStatus.PENDING,
        transactionId: "VOL-PAY-002",
      },
      {
        bookingId: robbyBooking2.id,
        amount: "93750.00",
        paymentMethod: PaymentMethod.E_WALLET,
        status: PaymentStatus.PAID,
        transactionId: "VOL-PAY-003",
      },
    ],
  });

  const totalSlots = createdStations.reduce(
    (total, station) =>
      total + station.slots.length,
    0,
  );

  console.log("");
  console.log(
    "Voltra mock data seeded successfully.",
  );
  console.log("Created:");
  console.log("- 3 users");
  console.log(
    `- ${createdStations.length} charging stations`,
  );
  console.log(`- ${totalSlots} charging slots`);
  console.log("- 3 bookings");
  console.log("- 3 payments");
}


main()
  .catch((error: unknown) => {
    console.error(
      "Failed to seed the Voltra database:",
      error,
    );

    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });