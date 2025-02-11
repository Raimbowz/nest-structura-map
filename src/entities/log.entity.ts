
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('logs')
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  category: string;

  @Column()
  type: string;

  @Column()
  field: string;

  @Column()
  created_at: Date;

  @Column()
  newValue: string;

  @Column()
  oldValue: string;

  @ManyToOne(() => User, user => user.logs)
  user: User;
}
