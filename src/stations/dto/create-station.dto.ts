import {
  IsEnum,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";
import { StationStatus } from "../../generated/prisma/client";

export class CreateStationDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  location!: string;

  @IsString()
  @IsNotEmpty()
  area!: string;

  @IsString()
  @IsNotEmpty()
  address!: string;

  @IsLatitude()
  latitude!: string;

  @IsLongitude()
  longitude!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(StationStatus)
  status?: StationStatus;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}