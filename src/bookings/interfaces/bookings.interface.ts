import { BookingStatus } from '../../generated/prisma/browser';

export interface Booking {
    id: number;
    userId: number;
    slotId: number;
    bookingCode: string;
    startTime: Date;
    endTime: Date;
    status: BookingStatus;
    createdAt: Date;
    updatedAt: Date;
}