import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
import { RecuperarSenhaDto } from './dto/recuperar-senha.dto';
import { TrocarSenhaDto } from './dto/trocar-senha.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<{
        token: string;
    }>;
    recuperarSenha(body: RecuperarSenhaDto): Promise<{
        CODUSER: number;
        USUARIO: string;
        SENHA: string;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    trocarSenha(request: Request, body: TrocarSenhaDto): Promise<{
        CODUSER: number;
        USUARIO: string;
        SENHA: string;
        DATAINC: Date;
        DATAALT: Date;
    }>;
}
