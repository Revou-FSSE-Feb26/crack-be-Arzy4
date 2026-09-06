import { Payment } from './payments.interface'

export interface PaymentResponse {
    message: string;
    data: Payment;
}

export interface PaymentsResponse {
    message: string;
    data: Payment[];
}