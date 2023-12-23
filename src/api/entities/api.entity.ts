import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('obstacle')
export class Api {
    @PrimaryGeneratedColumn()
    obstacle_id: number;

    @Column({ nullable: true })
    obstacle_type_id: number;

    @Column({ nullable: true, length: 255 })
    title: string;

    @Column({ nullable: true, type: 'datetime' })
    start_date: Date;

    @Column({ nullable: true })
    obstacle_status: number;

    @Column({ nullable: true, type: 'float' })
    latitude: number;

    @Column({ nullable: true, type: 'float' })
    longitude: number;

    @Column({ nullable: true, length: 255 })
    note: string;

    @Column({ nullable: true })
    status: number;

    @Column({ nullable: true, length: 45 })
    create_by: string;

    @Column({ nullable: true, type: 'datetime' })
    create_date: Date;

    @Column({ nullable: true, length: 45 })
    update_by: string;

    @Column({ nullable: true, type: 'datetime' })
    update_date: Date;

    @Column({ nullable: true, length: 45 })
    delete_by: string;

    @Column({ nullable: true, type: 'datetime' })
    delete_date: Date;

    @Column({ nullable: true, type: 'datetime' })
    end_date: Date;

    @Column({ nullable: true, length: 255 })
    province_name: string;

    @Column({ nullable: true, length: 255 })
    amphoe_name: string;

    @Column({ nullable: true, length: 255 })
    tambon_name: string;

    @Column({ nullable: true, length: 255 })
    mooban_name: string;

    @Column({ nullable: true })
    province_code: number;

    @Column({ nullable: true })
    amphoe_code: number;

    @Column({ nullable: true })
    tambon_code: number;

    @Column({ nullable: true })
    mooban_code: number;
}
