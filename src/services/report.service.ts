
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from '../entities/report.entity';
import { CreateReportDto, UpdateReportDto } from '../dtos/report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {}

  async findAll(page: number = 1, limit: number = 10) {
    const [items, total] = await this.reportRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['equipment', 'user'],
    });

    return {
      items,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    const report = await this.reportRepository.findOne({
      where: { id },
      relations: ['equipment', 'user'],
    });
    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    return report;
  }

  async create(createReportDto: CreateReportDto) {
    const report = this.reportRepository.create({
      ...createReportDto,
      created_at: new Date(),
    });
    return await this.reportRepository.save(report);
  }

  async update(id: number, updateReportDto: UpdateReportDto) {
    await this.findOne(id); // Check if report exists
    await this.reportRepository.update(id, updateReportDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const report = await this.findOne(id);
    return await this.reportRepository.remove(report);
  }
}
