import { 
    Injectable, 
    NotFoundException,
} from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { CreateChargingSlotDto } from './dto/create-chargingSlot.dto';
import { UpdateChargingSlotDto } from './dto/update-chargingSlot.dto';
import { ChargingSlotResponse, ChargingSlotsResponse } from './interfaces/chargingSlots-response.interface';

@Injectable()
export class ChargingSlotsService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async findAll(): Promise<ChargingSlotsResponse> {
        const chargingSlots = await this.prisma.chargingSlot.findMany();

        return {
            message: 'All charging slots retrieved successfully',
            data: chargingSlots.map((slot) => ({
            ...slot,
            pricePerKwh: Number(slot.pricePerKwh),
            powerKw: Number(slot.powerKw),
            })),
        };
    }

    async findOne(
        id: number,
    ): Promise<ChargingSlotResponse> {
        const chargingSlot = await this.prisma.chargingSlot.findUnique({
            where: {
                id,
            },
        });

        if (!chargingSlot) {
            throw new NotFoundException(`Charging slot ID ${id} not found`);
        }

        return {
            message: `Charging slot ID ${id} retrieved successfully`,
            data: {
                ...chargingSlot,
                pricePerKwh: Number(chargingSlot.pricePerKwh),
                powerKw: Number(chargingSlot.powerKw),
            },
        };
    }

    async create(
        createChargingSlotDto: CreateChargingSlotDto,
    ): Promise<ChargingSlotResponse> {
        const chargingSlot = await this.prisma.chargingSlot.create({
            data: {
                ...createChargingSlotDto,
            },
        });

        return {
            message: `New charging slot created successfully`,
            data: {
                ...chargingSlot,
                pricePerKwh: Number(chargingSlot.pricePerKwh),
                powerKw: Number(chargingSlot.powerKw),
            },
        };
    }

    async update(
        id: number,
        updateChargingSlotDto: UpdateChargingSlotDto,
    ): Promise<ChargingSlotResponse> {
        const chargingSlot = await this.prisma.chargingSlot.findUnique({
            where: {
                id,
            },
        });

        if (!chargingSlot) {
            throw new NotFoundException(`Charging slot ID ${id} not found`);
        }

        const updatedChargingSlot = await this.prisma.chargingSlot.update({
            where: {
                id,
            },
            data: {
                ...updateChargingSlotDto,
            },
        });

        return {
            message: `Charging slot ID ${id} updated successfully`,
            data: {
                ...updatedChargingSlot,
                pricePerKwh: Number(updatedChargingSlot.pricePerKwh),
                powerKw: Number(updatedChargingSlot.powerKw),
            },
        };
    }

    async remove(
        id: number,
    ): Promise<ChargingSlotResponse> {
        const chargingSlot = await this.prisma.chargingSlot.findUnique({
            where: {
                id,
            },
        });

        if (!chargingSlot) {
            throw new NotFoundException(`Charging slot ID ${id} not found`);
        }

        const deletedChargingSlot = await this.prisma.chargingSlot.delete({
            where: {
                id,
            },
        });

        return {
            message: `Charging slot ID ${id} deleted successfully`,
            data: {
                ...deletedChargingSlot,
                pricePerKwh: Number(deletedChargingSlot.pricePerKwh),
                powerKw: Number(deletedChargingSlot.powerKw),
            },
        };
    }
}
