import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { SpiderAggregatorService } from './spider-aggregator.service';
import { CreateSpiderAggregatorDto } from './dto/create-spider-aggregator.dto';
import { UpdateSpiderAggregatorDto } from './dto/update-spider-aggregator.dto';
import { AggregatedNewsResponseDto } from './dto/aggregated-news-response.dto';

@ApiTags('spider-aggregator')
@Controller('spider-aggregator')
export class SpiderAggregatorController {
  constructor(private readonly spiderAggregatorService: SpiderAggregatorService) { }

  @Post()
  @ApiOperation({
    summary: 'Create a new spider aggregator',
    description: 'Creates a new spider aggregator instance for news collection'
  })
  @ApiResponse({
    status: 201,
    description: 'Spider aggregator created successfully'
  })
  create(@Body() createSpiderAggregatorDto: CreateSpiderAggregatorDto) {
    return this.spiderAggregatorService.create(createSpiderAggregatorDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all spider aggregators',
    description: 'Retrieves all spider aggregator instances'
  })
  @ApiResponse({
    status: 200,
    description: 'List of all spider aggregators'
  })
  findAll() {
    return this.spiderAggregatorService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a spider aggregator by ID',
    description: 'Retrieves a specific spider aggregator by its ID'
  })
  @ApiParam({
    name: 'id',
    description: 'Spider aggregator ID',
    example: '1'
  })
  @ApiResponse({
    status: 200,
    description: 'Spider aggregator found'
  })
  @ApiResponse({
    status: 404,
    description: 'Spider aggregator not found'
  })
  findOne(@Param('id') id: string) {
    return this.spiderAggregatorService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a spider aggregator',
    description: 'Updates an existing spider aggregator by ID'
  })
  @ApiParam({
    name: 'id',
    description: 'Spider aggregator ID',
    example: '1'
  })
  @ApiResponse({
    status: 200,
    description: 'Spider aggregator updated successfully'
  })
  @ApiResponse({
    status: 404,
    description: 'Spider aggregator not found'
  })
  update(@Param('id') id: string, @Body() updateSpiderAggregatorDto: UpdateSpiderAggregatorDto) {
    return this.spiderAggregatorService.update(+id, updateSpiderAggregatorDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a spider aggregator',
    description: 'Deletes a spider aggregator by ID'
  })
  @ApiParam({
    name: 'id',
    description: 'Spider aggregator ID',
    example: '1'
  })
  @ApiResponse({
    status: 200,
    description: 'Spider aggregator deleted successfully'
  })
  @ApiResponse({
    status: 404,
    description: 'Spider aggregator not found'
  })
  remove(@Param('id') id: string) {
    return this.spiderAggregatorService.remove(+id);
  }

  @Get('news/:country')
  @ApiOperation({
    summary: 'Get top stories by country',
    description: 'Retrieves top stories from RSS feeds for a specific country. The API aggregates news from multiple RSS feeds, extracts full content from HTML articles, and returns comprehensive article data including metadata, social shares, and original URLs.'
  })
  @ApiParam({
    name: 'country',
    description: 'Country name or code (e.g., usa, uk, canada, germany)',
    example: 'usa',
    examples: {
      usa: { summary: 'United States', value: 'usa' },
      uk: { summary: 'United Kingdom', value: 'uk' },
      canada: { summary: 'Canada', value: 'canada' },
      germany: { summary: 'Germany', value: 'germany' },
      france: { summary: 'France', value: 'france' },
      australia: { summary: 'Australia', value: 'australia' },
      japan: { summary: 'Japan', value: 'japan' },
      india: { summary: 'India', value: 'india' },
      brazil: { summary: 'Brazil', value: 'brazil' }
    }
  })
  @ApiResponse({
    status: 200,
    description: 'Top stories retrieved successfully',
    type: AggregatedNewsResponseDto
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid country parameter'
  })
  @ApiResponse({
    status: 404,
    description: 'No RSS feeds found for the specified country'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error during content extraction'
  })
  async getTopStories(@Param('country') country: string) {
    return this.spiderAggregatorService.getTopStoriesByCountry(country);
  }
}
