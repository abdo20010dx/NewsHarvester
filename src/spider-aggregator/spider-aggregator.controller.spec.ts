import { Test, TestingModule } from '@nestjs/testing';
import { SpiderAggregatorController } from './spider-aggregator.controller';
import { SpiderAggregatorService } from './spider-aggregator.service';

describe('SpiderAggregatorController', () => {
  let controller: SpiderAggregatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpiderAggregatorController],
      providers: [SpiderAggregatorService],
    }).compile();

    controller = module.get<SpiderAggregatorController>(SpiderAggregatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
