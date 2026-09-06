import { 
    ForbiddenException,
    Injectable,
    NotFoundException
 } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { BookingResponse } from './interfaces/bookings-response.interface';
import { BookingsResponse } from './interfaces/bookings-response.interface';
import { PaymentCalculatorService } from '../payments/payment-calculator.service';

@Injectable()
export class BookingsService {
    constructor(
        private prisma: PrismaService,
        private paymentCalculator: PaymentCalculatorService,
    ) {}

    async findAll(
        userId: number,
        role: string
    ): Promise<BookingsResponse> {
        const bookings =
            role === 'ADMIN'
            ? await this.prisma.booking.findMany()
            : await this.prisma.booking.findMany({
                where: {
                    userId: userId,
                },
            });

        return {
            message: 'Bookings retrieved successfully',
            data: bookings,
        };
    }

    async findOne(
        id: number,
        userId: number,
        role: string
    ): Promise<BookingResponse> {

        const booking = await this.prisma.booking.findUnique({
            where: {
                id,
            },
        });

        if (!booking) {
            throw new NotFoundException(`Booking with ID ${id} was not found`);
        }

        if (role !== 'ADMIN' && booking.userId !== userId) {
            throw new ForbiddenException(
            'You are not allowed to access this booking',
            );
        }

        return {
            message: `Booking ID ${id} retrieved successfully`,
            data: booking,
        };
    }

    async create(
        createBookingDto: CreateBookingDto,
        userId: number,
    ): Promise<BookingResponse> {
        const startTime = new Date(createBookingDto.startTime);

        const endTime = new Date(
            startTime.getTime() +
            createBookingDto.durationMinutes * 60 * 1000,
        );

        // Get the selected charging slot
        const slot = await this.prisma.chargingSlot.findUnique({
            where: {
                id: createBookingDto.slotId,
            },
        });

        if (!slot) {
            throw new NotFoundException(
                `Charging slot with ID ${createBookingDto.slotId} was not found`,
            );
        }

        // Calculate estimated energy and cost
        const calculation = this.paymentCalculator.calculate(
            Number(slot.powerKw),
            createBookingDto.durationMinutes,
            Number(slot.pricePerKwh),
        );

        const booking = await this.prisma.booking.create({
            data: {
                userId: userId,
                slotId: createBookingDto.slotId,
                bookingCode: `BOOK-${Date.now()}`,
                startTime: startTime,
                endTime: endTime,
                estimatedKwh: calculation.estimatedKwh,
                estimatedCost: calculation.estimatedCost,
            },
        });

        return {
            message: 'New booking created successfully',
            data: booking,
        };
    }

    async update(
        id: number,
        updateBookingDto: UpdateBookingDto,
        userId: number,
        role: string
    ): Promise<BookingResponse> {
        await this.findOne(id, userId, role);

        const updatedBooking = await this.prisma.booking.update({
            where: {
                id,
            },
            data: updateBookingDto,
        });

        return {
            message: `Booking ID ${id} updated successfully`,
            data: updatedBooking,
        };
    }

    async remove(
        id: number,
        userId: number,
        role: string
    ): Promise<BookingResponse> {
        await this.findOne(id, userId, role);

        const deletedBooking = await this.prisma.booking.delete({
            where: {
                id,
            },
        });
        
        return {
            message: `Booking ID ${id} was deleted successfully`,
            data: deletedBooking,
        };
    }
}