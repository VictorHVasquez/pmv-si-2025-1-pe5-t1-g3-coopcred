import { PrismaService } from 'src/services/prisma.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { TrocarSenhaDto } from './dto/trocar-senha.dto';
import { RecuperarSenhaDto } from './dto/recuperar-senha.dto';
export declare class AuthService {
    private readonly prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
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
    trocarSenha(body: TrocarSenhaDto, jwt: string): Promise<{
        CODUSER: number;
        USUARIO: string;
        SENHA: string;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    assinaToken(args: {
        USUARIO: string;
    }): Promise<string>;
}
