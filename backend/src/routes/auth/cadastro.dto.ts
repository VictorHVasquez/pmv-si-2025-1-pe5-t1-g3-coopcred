import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CadastroDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  USUARIO: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  SENHA: string;

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