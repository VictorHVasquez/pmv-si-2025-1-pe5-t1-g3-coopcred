import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { ClienteDto } from './cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    try {
      return await this.prisma.cliente.findMany();
    } catch (error) {
      throw new HttpException(
        error.message || 'Erro ao buscar clientes',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      const cliente = await this.prisma.cliente.findUnique({
        where: { CODCLI: id },
        include: { CONTA: true },
      });

      if (!cliente) {
        throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND);
      }

      return cliente;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        error.message || 'Erro ao buscar cliente',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(data: ClienteDto) {
    try {
      return await this.prisma.cliente.create({
        data: {
          NOME: data.NOME,
          TELEFONE: data.TELEFONE,
          EMAIL: data.EMAIL,
          CPF: data.CPF,
        },
      });
    } catch (error) {
      throw new HttpException(
        error.message || 'Erro ao criar cliente',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, data: ClienteDto) {
    try {
      const cliente = await this.prisma.cliente.findUnique({
        where: { CODCLI: id },
      });

      if (!cliente) {
        throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND);
      }

      return await this.prisma.cliente.update({
        where: { CODCLI: id },
        data,
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        error.message || 'Erro ao atualizar cliente',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      const cliente = await this.prisma.cliente.findUnique({
        where: { CODCLI: id },
      });

      if (!cliente) {
        throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND);
      }

      return await this.prisma.cliente.delete({
        where: { CODCLI: id },
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        error.message || 'Erro ao remover cliente',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
