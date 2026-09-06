import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  Min,
} from 'class-validator';

import { PaymentMethod } from '../../generated/prisma/enums';

export class CreatePaymentDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  bookingId!: number;

  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  paymentMethod!: PaymentMethod;
}