import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentCalculatorService {
  calculate(
    powerKw: number,
    durationMinutes: number,
    pricePerKwh: number,
  ) {

    const durationHours = durationMinutes / 60;

    const estimatedKwh = powerKw * durationHours;

    const estimatedCost = estimatedKwh * pricePerKwh;

    return { estimatedKwh, estimatedCost,};
    
  }
}