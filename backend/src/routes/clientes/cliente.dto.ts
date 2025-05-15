import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ClienteDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  NOME: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  CPF: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  TELEFONE: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  EMAIL: string;
}
