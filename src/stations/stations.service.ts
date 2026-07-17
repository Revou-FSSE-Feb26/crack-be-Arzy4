import {
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateStationDto } from "./dto/create-station.dto";
import { UpdateStationDto } from "./dto/update-station.dto";

@Injectable()
export class StationsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(createStationDto: CreateStationDto) {
    return this.prisma.chargingStation.create({
      data: createStationDto,
    });
  }

  async findAll() {
    return this.prisma.chargingStation.findMany({
      include: {
        slots: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findOne(id: number) {
    const station =
      await this.prisma.chargingStation.findUnique({
        where: {
          id,
        },
        include: {
          slots: true,
        },
      });

    if (!station) {
      throw new NotFoundException(
        `Charging station with ID ${id} was not found`,
      );
    }

    return station;
  }

  async update(
    id: number,
    updateStationDto: UpdateStationDto,
  ) {
    await this.findOne(id);

    return this.prisma.chargingStation.update({
      where: {
        id,
      },
      data: updateStationDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    const deletedStation =
      await this.prisma.chargingStation.delete({
        where: {
          id,
        },
      });

    return {
      message: `Charging station with ID ${id} was deleted successfully`,
      data: deletedStation,
    };
  }
}