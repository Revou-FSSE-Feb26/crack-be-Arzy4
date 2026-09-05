import { Test, TestingModule } from '@nestjs/testing';
import { ChargingSlotsController } from './charging-slots.controller';
import { ChargingSlotsService } from './charging-slots.service';

describe('ChargingSlotsController', () => {
  let controller: ChargingSlotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargingSlotsController],
      providers: [ChargingSlotsService],
    }).compile();

    controller = module.get<ChargingSlotsController>(ChargingSlotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
