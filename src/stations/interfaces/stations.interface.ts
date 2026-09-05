import { StationStatus } from '../../generated/prisma/browser';

export interface Station {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  status: StationStatus;
  createdAt: Date;
  updatedAt: Date;
}