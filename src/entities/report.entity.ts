
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipment } from './equipment.entity';
import { User } from './user.entity';

@Entity('reports')
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  equipment_id: number;

  @Column()
  user_id: number;

  @Column()
  operation_hours: number;

  @Column()
  oil_pressure: number;

  @Column()
  oil_temperature: number;

  @Column()
  coolant_temperature: number;

  @Column()
  cos: number;

  @Column()
  generator_voltage: number;

  @Column()
  generator_frequency: number;

  @Column()
  total_electricity_production: number;

  @Column()
  status: string;

  @Column()
  fuel_pressure: number;

  @Column()
  created_at: Date;

  @ManyToOne(() => Equipment)
  equipment: Equipment;

  @ManyToOne(() => User)
  user: User;
}
