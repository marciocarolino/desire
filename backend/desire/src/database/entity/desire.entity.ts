import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './users.entity';

@Entity('tb_desire')
export class Desire {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ManyToOne(() => Users, (users) => users.desire)
  @JoinColumn({ name: 'users_id' })
  users: Users;

  @Column({ name: 'desire' })
  desire: string;

  @Column({ name: 'description' })
  description: string;
}
