
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Company } from './company.entity';
import { Equipment } from './equipment.entity';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  entity_id: number;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @Column()
  project_code: string;

  @Column()
  contract_number: string;

  @Column()
  type: string;

  @Column()
  company_id: number;

  @ManyToOne(() => Company, company => company.projects)
  company: Company;

  @OneToMany(() => Equipment, equipment => equipment.project)
  equipment: Equipment[];
}
