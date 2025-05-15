import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TransacaoService } from './transacao.service';
import { CreateTransacaoDto } from './create-transacao.dto';

@Controller('transacao')
@ApiTags('Transacao')
export class TransacaoController {
  constructor(
    private readonly transacaoService: TransacaoService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar transação (depósito, saque ou transferência)' })
  create(@Body() body: CreateTransacaoDto) {
    return this.transacaoService.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as transações' })
  findAll() {
    return this.transacaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar transação por ID' })
  findOne(@Param('id') id: string) {
    return this.transacaoService.findOne(+id);
  }
}
