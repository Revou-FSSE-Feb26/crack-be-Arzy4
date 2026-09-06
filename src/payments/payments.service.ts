import { 
    ForbiddenException,
    Injectable,
    NotFoundException
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payments.dto';
import { UpdatePaymentDto } from './dto/update-payments.dto';
import { PaymentResponse, PaymentsResponse } from './interfaces/payments-response.interface';


@Injectable()
export class PaymentsService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async findAll(
        userId: number,
        role: string,
    ): Promise<PaymentsResponse> {

        const payments =
            role === 'ADMIN'
            ? await this.prisma.payment.findMany()
            : await this.prisma.payment.findMany({
                where: {
                    booking: {
                        userId: userId,
                    },
                },
            });

        return {
            message: `All payments retrieved successfully`,
            data: payments.map((payment) => ({
                ...payment,
                amount: Number(payment.amount),
            })),
        };
    }

    async findOne(
        id: number,
        userId: number,
        role: string
    ): Promise<PaymentResponse>{

        const payment = await this.prisma.payment.findUnique({
            where: {
                id,
            },
            include: {
                booking: true,
            },
        });

        if (!payment) {
            throw new NotFoundException('Payment not found');
        }

        if (role !== 'ADMIN' && payment.booking.userId !== userId) {
            throw new ForbiddenException(
                'You are not allowed to access this payment',
            );
        }

        return {
            message: 'Payment retrieved successfully',
            data: {
            ...payment,
            amount: Number(payment.amount),
            },
        };
    }

    async create(
        createPaymentDto: CreatePaymentDto,
        userId: number,
        role: string,
    ): Promise<PaymentResponse> {
        const booking = await this.prisma.booking.findUnique({
            where: {
                id: createPaymentDto.bookingId,
            },
        });

        if (!booking) {
            throw new NotFoundException(
                `Booking with ID ${createPaymentDto.bookingId} was not found`,
            );
        }

        if (role !== 'ADMIN' && booking.userId !== userId) {
            throw new ForbiddenException(
                'You are not allowed to make a payment for this booking',
            );
        }

        if (booking.estimatedCost === null) {
            throw new ForbiddenException(
                'This booking does not have an estimated cost',
            );
        }

        const payment = await this.prisma.payment.create({
            data: {
                bookingId: createPaymentDto.bookingId,
                amount: booking.estimatedCost,
                paymentMethod: createPaymentDto.paymentMethod,
            },
        });

        return {
            message: 'New payment created successfully',
            data: {
            ...payment,
            amount: Number(payment.amount),
            },
        };
    }

    async update(
        id: number,
        updatePaymentDto: UpdatePaymentDto,
        userId: number,
        role: string,
    ): Promise<PaymentResponse> {
        const payment = await this.prisma.payment.findUnique({
            where: {
                id,
            },
            include: {
                booking: true,
            },
        });

        if (!payment) {
            throw new NotFoundException('Payment not found');
        }

        if (role !== 'ADMIN' && payment.booking.userId !== userId) {
            throw new ForbiddenException(
                'You are not allowed to update this payment',
            );
        }

        const updatedPayment = await this.prisma.payment.update({
            where: {
                id,
            },
            data: {
                paymentMethod: updatePaymentDto.paymentMethod,
            },
        });

        return {
            message: 'Payment updated successfully',
            data: {
            ...updatedPayment,
            amount: Number(updatedPayment.amount),
            },
        };
    }
    
    async remove(
        id: number,
        userId: number,
        role: string,
    ): Promise<PaymentResponse> {
        const payment = await this.prisma.payment.findUnique({
            where: {
                id,
            },
            include: {
                booking: true,
            },
        });

        if (!payment) {
            throw new NotFoundException('Payment not found');
        }

        if (role !== 'ADMIN' && payment.booking.userId !== userId) {
            throw new ForbiddenException(
                'You are not allowed to delete this payment',
            );
        }

        const deletedPayment = await this.prisma.payment.delete({
            where: {
                id,
            },
        });

        return {
            message: 'Payment deleted successfully',
            data: {
            ...deletedPayment,
            amount: Number(deletedPayment.amount),
            },
        };
    } 
}
