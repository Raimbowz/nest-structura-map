
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Log } from './log.entity';
import { Note } from './note.entity';
import { Company } from './company.entity';
import { Project } from './project.entity';
import { Task } from './task.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ default: false })
  banned: boolean;

  @Column({ nullable: true })
  ban_reason: string;

  @Column({ nullable: true })
  refresh_token: string;

  @Column({ default: true })
  active: boolean;

  @Column({ nullable: true })
  image_id: number;

  @OneToMany(() => Log, log => log.user)
  logs: Log[];

  @OneToMany(() => Note, note => note.user)
  notes: Note[];

  @ManyToMany(() => Company)
  @JoinTable({
    name: 'users_companies',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'company_id', referencedColumnName: 'id' },
  })
  companies: Company[];

  @ManyToMany(() => Project)
  @JoinTable({
    name: 'users_accesses',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'project_id', referencedColumnName: 'id' },
  })
  projects: Project[];
}
