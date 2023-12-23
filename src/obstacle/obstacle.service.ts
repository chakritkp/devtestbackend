import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateObstacleDto } from './dto/create-obstacle.dto';
import { UpdateObstacleDto } from './dto/update-obstacle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Obstacle } from './entities/obstacle.entity';
import { Repository, UpdateResult } from 'typeorm';


@Injectable()
export class ObstacleService {

  constructor(
    @InjectRepository(Obstacle)
    private obstacleRepository: Repository<Obstacle>
  ) { }

  create(createObstacleDto: CreateObstacleDto): Promise<Obstacle> {
    const newObstale = this.obstacleRepository.create(createObstacleDto);
    return this.obstacleRepository.save(newObstale);
  }

  findAll(): Promise<Obstacle[]> {
    return this.obstacleRepository.find();
  }

  findOne(id: number): Promise<Obstacle> {
    return this.obstacleRepository.findOne({ where: { obstacle_id: id } });
  }

  update(id: number, updateObstacleDto: UpdateObstacleDto): Promise<UpdateResult> {
    return this.obstacleRepository.update(id, updateObstacleDto);
  }

  async softDelete(id: number): Promise<void> {
    const updateResult = await this.obstacleRepository
      .createQueryBuilder()
      .softDelete()
      .where("obstacle_id = :id", { id })
      .execute();

    if (updateResult.affected === 0) {
      throw new NotFoundException(`Obstacle with ID ${id} not found`);
    }

    console.log("Number of affected rows:", updateResult.affected);
    console.log("Raw result:", updateResult.raw);
    console.log("Generated maps:", updateResult.generatedMaps);

    return Promise.resolve();
  }
}
