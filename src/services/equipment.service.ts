
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipment } from '../entities/equipment.entity';
import { CreateEquipmentDto, UpdateEquipmentDto } from '../dtos/equipment.dto';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    private equipmentRepository: Repository<Equipment>,
  ) {}

  async findAll(page: number = 1, limit: number = 10) {
    const [items, total] = await this.equipmentRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['project'],
    });

    return {
      items,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    const equipment = await this.equipmentRepository.findOne({
      where: { id },
      relations: ['project'],
    });
    if (!equipment) {
      throw new NotFoundException(`Equipment with ID ${id} not found`);
    }
    return equipment;
  }

  async create(createEquipmentDto: CreateEquipmentDto) {
    const equipment = this.equipmentRepository.create(createEquipmentDto);
    return await this.equipmentRepository.save(equipment);
  }

  async update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    await this.findOne(id); // Check if equipment exists
    await this.equipmentRepository.update(id, updateEquipmentDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const equipment = await this.findOne(id);
    return await this.equipmentRepository.remove(equipment);
  }
}
