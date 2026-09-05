import {
    Injectable,
    NotFoundException
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateStationDto } from "./dto/create-station.dto";
import { UpdateStationDto } from "./dto/update-station.dto";
import { StationResponse, StationsResponse } from "./interfaces/stations-response.interface";

@Injectable()
export class StationsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async findAll(): Promise<StationsResponse> {
    const stations = await this.prisma.chargingStation.findMany({
      include: {
        slots: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      message: 'All charging stations retrieved successfully',
      data: stations.map((station) => ({
        ...station,
        latitude: Number(station.latitude),
        longitude: Number(station.longitude),
      })),
    };
  }

  async findOne(
    id: number
  ): Promise<StationResponse> {
    const station = await this.prisma.chargingStation.findUnique({
        where: {
          id,
        },
        include: {
          slots: true,
        },
      });

    if (!station) {
      throw new NotFoundException(
        `Charging station ID ${id} was not found`,
      );
    }

    return {
      message: `Charging station ID ${id} retrieved successfully`,
      data: {
        ...station,
        latitude: Number(station.latitude),
        longitude: Number(station.longitude),
      },
    };
  }

  async create(
    createStationDto: CreateStationDto
  ): Promise<StationResponse> {
    const station = await this.prisma.chargingStation.create({
      data: createStationDto,
    });

    return {
      message: 'New charging station created successfully',
      data: {
        ...station,
        latitude: Number(station.latitude),
        longitude: Number(station.longitude),
      },
    };
  }

  async update(
    id: number,
    updateStationDto: UpdateStationDto,
  ): Promise<StationResponse> {
    await this.findOne(id);

    const updatedStation = await this.prisma.chargingStation.update({
      where: {
        id,
      },
      data: updateStationDto,
    });

    return {
      message: `Charging station ID ${id} was updated successfully`,
      data: {
        ...updatedStation,
        latitude: Number(updatedStation.latitude),
        longitude: Number(updatedStation.longitude),
      },
    };
  }

  async remove(
    id: number
  ): Promise<StationResponse> {
    await this.findOne(id);

    const deletedStation =
      await this.prisma.chargingStation.delete({
        where: {
          id,
        },
      });

    return {
      message: `Charging station ID ${id} was deleted successfully`,
      data: {
        ...deletedStation,
        latitude: Number(deletedStation.latitude),
        longitude: Number(deletedStation.longitude),
      },
    };
  }
}