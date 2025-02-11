
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from './project.entity';

@Entity('equipment')
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  project_id: number;

  @Column()
  entity_id: number;

  @Column()
  technical_specs: string;

  @Column()
  name: string;

  @Column()
  load_kw: number;

  @Column()
  operation_hours: number;

  @Column()
  status: string;

  @Column()
  inventory_number: string;

  @Column()
  factory_number: string;

  @Column()
  additional_number: string;

  @Column()
  schemes: string;

  @Column()
  engine_number: string;

  @Column()
  generator_number: string;

  @Column()
  fuel_pressure: number;

  @Column()
  power: number;

  @ManyToOne(() => Project, project => project.equipment)
  project: Project;
}
