import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
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
}
