import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpiderAggregatorModule } from './spider-aggregator/spider-aggregator.module';

@Module({
  imports: [SpiderAggregatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
