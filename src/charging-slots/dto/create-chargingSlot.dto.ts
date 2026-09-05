import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import {
  ChargerType,
  SlotStatus,
} from '../../generated/prisma/browser';

export class CreateChargingSlotDto {
  @IsString()
  @IsNotEmpty()
  slotCode!: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  stationId!: number;

  @IsEnum(ChargerType)
  @IsNotEmpty()
  chargerType!: ChargerType;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  powerKw!: number;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  pricePerKwh!: number;

  @IsOptional()
  @IsEnum(SlotStatus)
  status?: SlotStatus;
}