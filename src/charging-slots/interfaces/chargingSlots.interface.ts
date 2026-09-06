import {
  ChargerType,
  SlotStatus,
} from '../../generated/prisma/browser';

export interface ChargingSlot {
  id: number;
  slotCode: string;
  stationId: number;
  chargerType: ChargerType;
  powerKw: number;
  pricePerKwh: number;
  status: SlotStatus;
  createdAt: Date;
  updatedAt: Date;
}