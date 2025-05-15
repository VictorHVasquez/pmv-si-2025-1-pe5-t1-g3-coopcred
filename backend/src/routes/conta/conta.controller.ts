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
import { ContaService } from './conta.service';
import { ContaDto } from './conta.dto';


@Controller('conta')
@ApiTags('Conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Get()
  async findAll() {
    return this.contaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.contaService.findOne(parseInt(id));
  }

  @Post()
  async create(@Body() data: ContaDto) {
    return this.contaService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ContaDto) {
    return this.contaService.update(parseInt(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.contaService.remove(parseInt(id));
  }
}