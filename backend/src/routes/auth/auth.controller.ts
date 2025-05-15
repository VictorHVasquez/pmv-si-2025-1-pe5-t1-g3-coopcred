import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { ApiTags } from '@nestjs/swagger';
import { CadastroDto } from './cadastro.dto';
  
@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }


  @Post('/cadastro')
  cadastro(@Body() body: CadastroDto) {
    return this.authService.cadastro(body);
  }
}
