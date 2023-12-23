import { Test, TestingModule } from '@nestjs/testing';
import { ObstacleController } from './obstacle.controller';
import { ObstacleService } from './obstacle.service';

describe('ObstacleController', () => {
  let controller: ObstacleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObstacleController],
      providers: [ObstacleService],
    }).compile();

    controller = module.get<ObstacleController>(ObstacleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
