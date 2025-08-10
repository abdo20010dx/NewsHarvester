import { Test, TestingModule } from '@nestjs/testing';
import { SpiderAggregatorService } from './spider-aggregator.service';

describe('SpiderAggregatorService', () => {
  let service: SpiderAggregatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpiderAggregatorService],
    }).compile();

    service = module.get<SpiderAggregatorService>(SpiderAggregatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
