import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ContaDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  BANCO: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  AGENCIA: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  CONTA: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  SALDO: number;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsNumber()
  CODCLI?: number;
} 