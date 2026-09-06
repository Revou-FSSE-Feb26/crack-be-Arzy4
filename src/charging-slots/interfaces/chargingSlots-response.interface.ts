import { ChargingSlot } from './chargingSlots.interface';

export interface ChargingSlotResponse {
    message: string;
    data: ChargingSlot;
}

export interface ChargingSlotsResponse {
    message: string;
    data: ChargingSlot[];
}