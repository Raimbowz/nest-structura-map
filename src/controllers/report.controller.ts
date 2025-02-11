
import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ReportService } from '../services/report.service';
import { CreateReportDto, UpdateReportDto } from '../dtos/report.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('reports')
@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  @ApiOperation({ summary: 'Get all reports' })
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.reportService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get report by id' })
  findOne(@Param('id') id: number) {
    return this.reportService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create report' })
  create(@Body() createReportDto: CreateReportDto) {
    return this.reportService.create(createReportDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update report' })
  update(@Param('id') id: number, @Body() updateReportDto: UpdateReportDto) {
    return this.reportService.update(id, updateReportDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete report' })
  remove(@Param('id') id: number) {
    return this.reportService.remove(id);
  }
}
