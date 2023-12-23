import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Api } from './entities/api.entity';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Transform } from 'class-transformer';

@Injectable()
export class ApiService {
  save(newApi: string): Promise<Api> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Api)
    private apiRepository: Repository<Api>
  ) {}

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  private transformDate(date: Date): Date {
    return date;
  }

  async create(createApiDto: CreateApiDto): Promise<Api> {
    const api = this.apiRepository.create(createApiDto);
    return await this.apiRepository.save(api);
  }

  findAll(): Promise<Api[]> {
    return this.apiRepository.find();
  }

  findOne(id: number): Promise<Api> {
    return this.apiRepository.findOne({ where: { obstacle_id: id } });
  }

  async update(id: number, updateApiDto: UpdateApiDto) {
    await this.apiRepository.update(id, updateApiDto);
  }

  async remove(id: number): Promise<void> {
    await this.apiRepository.delete(id);
  }
}
