
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Company } from './entities/company.entity';
import { Project } from './entities/project.entity';
import { Equipment } from './entities/equipment.entity';
import { Report } from './entities/report.entity';
import { Log } from './entities/log.entity';
import { Note } from './entities/note.entity';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { ProjectController } from './controllers/project.controller';
import { ProjectService } from './services/project.service';
import { ReportController } from './controllers/report.controller';
import { ReportService } from './services/report.service';
import { EquipmentController } from './controllers/equipment.controller';
import { EquipmentService } from './services/equipment.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest_structura_map',
      entities: [User, Company, Project, Equipment, Report, Log, Note],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Company, Project, Equipment, Report, Log, Note]),
  ],
  controllers: [UserController, ProjectController, ReportController, EquipmentController],
  providers: [UserService, ProjectService, ReportService, EquipmentService],
})
export class AppModule {}
