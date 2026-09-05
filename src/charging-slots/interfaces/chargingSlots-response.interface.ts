import { ChargingSlot } from './chargingSlots.interfaces';

export interface ChargingSlotResponse {
    message: string;
    data: ChargingSlot;
}

export interface ChargingSlotsResponse {
    message: string;
    data: ChargingSlot[];
}