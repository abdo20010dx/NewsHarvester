import { PartialType } from '@nestjs/mapped-types';
import { CreateSpiderAggregatorDto } from './create-spider-aggregator.dto';

export class UpdateSpiderAggregatorDto extends PartialType(CreateSpiderAggregatorDto) {}
