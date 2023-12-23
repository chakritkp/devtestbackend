import { Module } from '@nestjs/common';
import { ObstacleService } from './obstacle.service';
import { ObstacleController } from './obstacle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Obstacle } from './entities/obstacle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Obstacle])],
  controllers: [ObstacleController],
  providers: [ObstacleService],
})
export class ObstacleModule {}
