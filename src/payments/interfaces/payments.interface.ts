import { PaymentStatus, PaymentMethod } from "../../generated/prisma/client";

export interface Payment {
    id: number;
    bookingId: number;
    amount: number;
    paymentMethod: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}