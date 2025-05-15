import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { ContaDto } from './conta.dto';

@Injectable()
export class ContaService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    try {
      return await this.prisma.conta.findMany();
    } catch (error) {
      throw new HttpException(
        error.message || 'Erro ao buscar contas',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      const conta = await this.prisma.conta.findUnique({
        where: { CODCON: id },
        include: { CLIENTE: true, TRANSACOES: true },
      });

      if (!conta) {
        throw new HttpException('Conta não encontrada', HttpStatus.NOT_FOUND);
      }

      return conta;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        error.message || 'Erro ao buscar conta',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(data: ContaDto) {
    try {
      return await this.prisma.conta.create({
        data: {
          BANCO: data.BANCO,
          AGENCIA: data.AGENCIA,
          CONTA: data.CONTA,
          SALDO: data.SALDO,
          ...(data.CODCLI && { 
            CLIENTE: { 
              connect: { CODCLI: data.CODCLI } 
            }
          })
        },
      });
    } catch (error) {
      throw new HttpException(
        error.message || 'Erro ao criar conta',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, data: ContaDto) {
    try {
      const conta = await this.prisma.conta.findUnique({
        where: { CODCON: id },
      });

      if (!conta) {
        throw new HttpException('Conta não encontrada', HttpStatus.NOT_FOUND);
      }

      return await this.prisma.conta.update({
        where: { CODCON: id },
        data: {
          BANCO: data.BANCO,
          AGENCIA: data.AGENCIA,
          CONTA: data.CONTA,
          SALDO: data.SALDO,
          ...(data.CODCLI && { 
            CLIENTE: { 
              connect: { CODCLI: data.CODCLI } 
            }
          })
        },
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        error.message || 'Erro ao atualizar conta',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      const conta = await this.prisma.conta.findUnique({
        where: { CODCON: id },
      });

      if (!conta) {
        throw new HttpException('Conta não encontrada', HttpStatus.NOT_FOUND);
      }

      return await this.prisma.conta.delete({
        where: { CODCON: id },
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        error.message || 'Erro ao remover conta',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
