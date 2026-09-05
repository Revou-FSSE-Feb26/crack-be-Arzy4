import { Station } from './stations.interface';

export interface StationResponse {
  message: string;
  data: Station;
}

export interface StationsResponse {
  message: string;
  data: Station[];
}