import { Test, TestingModule } from '@nestjs/testing';
import { ChargingSlotsService } from './charging-slots.service';

describe('ChargingSlotsService', () => {
  let service: ChargingSlotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargingSlotsService],
    }).compile();

    service = module.get<ChargingSlotsService>(ChargingSlotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
