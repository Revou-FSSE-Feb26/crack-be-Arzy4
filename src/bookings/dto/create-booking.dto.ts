import {
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Min,
} from 'class-validator';
import { BookingStatus } from '../../generated/prisma/browser';

export class CreateBookingDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  slotId!: number;

  @IsDateString()
  @IsNotEmpty()
  startTime!: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  durationMinutes!: number;

  @IsOptional()
  @IsIn(Object.values(BookingStatus))
  status?: BookingStatus;
}