import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PaymentCalculatorService } from './payment-calculator.service';

@Module({
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    PaymentCalculatorService,
  ],
  exports: [
    PaymentCalculatorService,
  ],
})
export class PaymentsModule {}
