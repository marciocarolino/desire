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

  @Column({ name: 'is_active' })
  is_active: boolean;

  @Column({ type: 'timestamptz', name: 'create_at' })
  create_at: Date;

  @Column({ type: 'timestamptz', name: 'update_at' })
  update_at;
}
