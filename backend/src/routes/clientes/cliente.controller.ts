import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClienteService } from './cliente.service';
import { ClienteDto } from './cliente.dto';

@Controller('cliente')
@ApiTags('Cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  async findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clienteService.findOne(parseInt(id));
  }

  @Post()
  async create(@Body() data: ClienteDto) {
    return this.clienteService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ClienteDto) {
    return this.clienteService.update(parseInt(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.clienteService.remove(parseInt(id));
  }
}