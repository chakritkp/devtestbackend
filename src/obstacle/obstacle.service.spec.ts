import { Test, TestingModule } from '@nestjs/testing';
import { ObstacleService } from './obstacle.service';

describe('ObstacleService', () => {
  let service: ObstacleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObstacleService],
    }).compile();

    service = module.get<ObstacleService>(ObstacleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
