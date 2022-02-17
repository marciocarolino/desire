import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_users')
export class Users {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'sex' })
  sex: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'cell' })
  cell: string;

  @Column({ name: 'city' })
  city: string;

  @Column({ name: 'state' })
  state: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ type: 'timestamptz', name: 'create_at', default: new Date() })
  create_at: Date;

  @Column({ type: 'timestamptz', name: 'update_at', default: new Date() })
  update_at: Date;
}
