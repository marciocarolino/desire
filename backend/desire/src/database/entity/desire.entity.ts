import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class DesireEntity {


    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'description' })
    description: string;

    @Column({ name: 'desire' })
    desire: string;
}