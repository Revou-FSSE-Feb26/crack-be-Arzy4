import { Module } from '@nestjs/common';
import { ChargingSlotsService } from './charging-slots.service';
import { ChargingSlotsController } from './charging-slots.controller';

@Module({
  controllers: [ChargingSlotsController],
  providers: [ChargingSlotsService],
})
export class ChargingSlotsModule {}
