
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Equipment } from './equipment.entity';

@Entity('notes')
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  user_id: number;

  @Column()
  equipment_id: number;

  @Column()
  text: string;

  @Column()
  image_id: number;

  @ManyToOne(() => User, user => user.notes)
  user: User;

  @ManyToOne(() => Equipment)
  equipment: Equipment;
}
