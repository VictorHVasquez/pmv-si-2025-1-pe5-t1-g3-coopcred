import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTransacaoDto {
  @ApiProperty({ 
    description: 'Tipo da transação (DEPOSITO, SAQUE ou TRANSFERENCIA)',
    enum: ['DEPOSITO', 'SAQUE', 'TRANSFERENCIA'],
    example: 'DEPOSITO'
  })
  TIPO: 'DEPOSITO' | 'SAQUE' | 'TRANSFERENCIA';

  @ApiProperty({ 
    description: 'Valor da transação',
    example: 100.50
  })
  VALOR: number;

  @ApiProperty({ 
    description: 'Descrição da transação',
    example: 'Depósito mensal'
  })
  DESCRICAO: string;

  @ApiProperty({ 
    description: 'Código da conta',
    example: 1,
    required: true
  })
  CODCON: number;
  
  @ApiPropertyOptional({ 
    description: 'CPF do destinatário (apenas para transferências)',
    example: '12345678901'
  })
  CPF?: string;
} 