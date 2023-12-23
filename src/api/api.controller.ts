import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  async create(@Body() createApiDto: CreateApiDto) {
    const createdApi = await this.apiService.create(createApiDto);
    return { message: 'API created successfully', data: createdApi };
  }

  @Get()
  async findAll() {
    return await this.apiService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return await this.apiService.findOne(id);
  }

  @Patch('/update/:id')
  async update(@Param('id') id: number, @Body() updateApiDto: UpdateApiDto) {
    return await this.apiService.update(id, updateApiDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleteData = await this.apiService.remove(id);
    return { message: 'Delete successfully', data: deleteData };
  }
}
