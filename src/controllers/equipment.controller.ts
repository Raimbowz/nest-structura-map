
import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { EquipmentService } from '../services/equipment.service';
import { CreateEquipmentDto, UpdateEquipmentDto } from '../dtos/equipment.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('equipment')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Get()
  @ApiOperation({ summary: 'Get all equipment' })
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.equipmentService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get equipment by id' })
  async findOne(@Param('id') id: number) {
    return this.equipmentService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create equipment' })
  async create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update equipment' })
  async update(@Param('id') id: number, @Body() updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentService.update(id, updateEquipmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete equipment' })
  async remove(@Param('id') id: number) {
    return this.equipmentService.remove(id);
  }
}
