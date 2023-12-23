import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateObstacleDto {
    @IsNumber()
    @IsNotEmpty()
    obstacle_id: number;

    @IsNumber()
    @IsNotEmpty()
    obstacle_type_id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsDate()
    start_date: Date;

    @IsNumber()
    obstacle_status: number;

    @IsNumber()
    latitude: number;

    @IsNumber()
    longitude: number;

    @IsString()
    note: string;

    @IsNumber()
    status: number;

    @IsString()
    create_by: string;

    @IsDate()
    create_date: Date;

    @IsString()
    update_by: string;

    @IsDate()
    update_date: Date;

    @IsString()
    delete_by: string;

    @IsDate()
    delete_date: Date;

    @IsDate()
    end_date: Date;

    @IsString()
    province_name: string;

    @IsString()
    amphoe_name: string;

    @IsString()
    tambon_name: string;

    @IsString()
    mooban_name: string;

    @IsNumber()
    province_code: number;

    @IsNumber()
    amphoe_code: number;

    @IsNumber()
    tambon_code: number;

    @IsNumber()
    mooban_code: number;
}
