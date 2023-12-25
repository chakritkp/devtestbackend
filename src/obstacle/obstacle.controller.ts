import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { ObstacleService } from './obstacle.service';
import { CreateObstacleDto } from './dto/create-obstacle.dto';
import { UpdateObstacleDto } from './dto/update-obstacle.dto';
import { isDate } from 'class-validator';
import { format } from 'date-fns-tz';
import { th } from 'date-fns/locale';
import { Obstacle } from './entities/obstacle.entity';

@Controller('obstacle')
export class ObstacleController {
  private readonly logger = new Logger(ObstacleController.name);
  constructor(private readonly obstacleService: ObstacleService) { }

  @Post()
  async create(@Body() createObstacleDto: CreateObstacleDto) {
    try {
      return await this.obstacleService.create(createObstacleDto);
    } catch (error) {
      console.error(error.message);
      throw new BadRequestException('Error creating obstacle');
    }
  }

  @Get()
  async findAll() {
    const obstacles = await this.obstacleService.findAll();

    const formattedObstacles = obstacles
      .filter(obstacle => obstacle.deleteDate === null)
      .map(obstacle => ({
        ...obstacle,
        obstacle_type_name: this.mapObstacleType(obstacle.obstacle_type_id),
        status: this.mapObstacleStatus(obstacle.status),
        start_date: obstacle.start_date ? format(obstacle.start_date, 'dd/MM/yyyy HH:mm', { locale: th }) : null,
        create_date: obstacle.create_date ? format(obstacle.create_date, 'dd/MM/yy HH:mm', { locale: th }) : null,
        update_date: obstacle.update_date ? format(obstacle.update_date, 'dd/MM/yy HH:mm', { locale: th }) : null,
        delete_date: obstacle.end_date ? format(obstacle.end_date, 'dd/MM/yy HH:mm', { locale: th }) : null,
        end_date: obstacle.end_date ? format(obstacle.end_date, 'dd/MM/yy HH:mm', { locale: th }) : null,
      }));

    return formattedObstacles;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.obstacleService.findOne(Number(id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateObstacleDto: UpdateObstacleDto) {
    return await this.obstacleService.update(Number(id), updateObstacleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.obstacleService.softDelete(Number(id));
  }

  private convertData(object: any): any {
    const convertedObj: object = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];

        if (typeof value === 'string' && isDate(new Date(value))) {
          convertedObj[key] = new Date(value);
        } else {

          convertedObj[key] = value;
        }
      }
    }
    return convertedObj;

  }

  private mapObstacleType(obstacleTypeId: number): string {
    switch (obstacleTypeId) {
      case 1:
        return 'น้ำท่วมถนน';
      case 2:
        return 'สะพานขาด';
      case 3:
        return 'ถนนขาด';
      case 4:
        return 'ดินถล่ม';
      default:
        return '';
    }
  }

  private mapObstacleStatus(obstacleStatusId: number): string {
    switch (obstacleStatusId) {
      case 0:
        return 'ไม่พบอุปสรรค';
      case 1:
        return 'ยังพบอุปสรรค';
      default:
        return '';
    }
  }
}
