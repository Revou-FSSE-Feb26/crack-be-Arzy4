import { Booking } from './bookings.interface';

export interface BookingResponse {
    message: string;
    data: Booking;
}

export interface BookingsResponse {
  message: string;
  data: Booking[];
}