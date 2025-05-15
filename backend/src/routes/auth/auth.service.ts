import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { LoginDto } from './login.dto';
import { CadastroDto } from './cadastro.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async login(body: LoginDto) {
    try {
      const busca = await this.prisma.login.findFirst({
        where: {
          USUARIO: body.USUARIO,
          SENHA: body.SENHA,
        },
      });
      if (!busca) {
        throw new HttpException(
          'Usuario ou senha incorretos',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async cadastro(data: CadastroDto) {   
    try {
      // Verifica se já existe um usuário com o mesmo nome
      const existingUser = await this.prisma.login.findFirst({
        where: {
          USUARIO: data.USUARIO,
        },
      });

      if (existingUser) {
        throw new HttpException(
          'Nome de usuário já existe',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Verifica se já existe um cliente com o mesmo CPF
      if (data.CPF) {
        const existingCliente = await this.prisma.cliente.findFirst({
          where: {
            CPF: data.CPF,
          },
        });

        if (existingCliente) {
          throw new HttpException(
            'CPF já cadastrado',
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      // Cria o login
      const login = await this.prisma.login.create({
        data: {
          USUARIO: data.USUARIO,
          SENHA: data.SENHA,
        },
      });

      // Cria o cliente
      const cliente = await this.prisma.cliente.create({
        data: {
          NOME: data.NOME,
          CPF: data.CPF,
          TELEFONE: data.TELEFONE,
          EMAIL: data.EMAIL,
        },
      });
      
      return {
        user: login,
        cliente: cliente,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        error.message || 'Erro ao realizar cadastro',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
