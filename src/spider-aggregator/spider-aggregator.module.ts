import { Module } from '@nestjs/common';
import { SpiderAggregatorService } from './spider-aggregator.service';
import { SpiderAggregatorController } from './spider-aggregator.controller';

@Module({
  controllers: [SpiderAggregatorController],
  providers: [SpiderAggregatorService],
})
export class SpiderAggregatorModule {}
