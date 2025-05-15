import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateTransacaoDto } from './create-transacao.dto';

@Injectable()
export class TransacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTransacaoDto) {
    try {
      // Find the account
      const conta = await this.prisma.conta.findUnique({
        where: { CODCON: data.CODCON },
      });

      if (!conta) {
        throw new HttpException('Conta não encontrada', HttpStatus.NOT_FOUND);
      }

      // Check if it's a withdrawal and if there's enough balance
      if (data.TIPO === 'SAQUE') {
        if (conta.VALOR < data.VALOR) {
          throw new HttpException('Saldo insuficiente para realizar o saque', HttpStatus.BAD_REQUEST);
        }
        
        // Update account balance (subtract for withdrawal)
        await this.prisma.conta.update({
          where: { CODCON: data.CODCON },
          data: {
            VALOR: conta.VALOR - data.VALOR
          }
        });
      } else if (data.TIPO === 'DEPOSITO') {
        // Update account balance (add for deposit)
        await this.prisma.conta.update({
          where: { CODCON: data.CODCON },
          data: {
            VALOR: conta.VALOR + data.VALOR
          }
        });
      } else if (data.TIPO === 'TRANSFERENCIA') {
        if (!data.CPF) {
          throw new HttpException('CPF não informado', HttpStatus.BAD_REQUEST);
        }

        const clienteDestino = await this.prisma.cliente.findUnique({
          where: { CPF: data.CPF },
        });

        if (!clienteDestino) {
          throw new HttpException('Cliente de destino não encontrado', HttpStatus.BAD_REQUEST);
        }

        const contaDestino = await this.prisma.conta.findFirst({
          where: { CODCLI: clienteDestino.CODCLI },
        });

        if (!contaDestino) {
          throw new HttpException('Conta de destino não encontrada', HttpStatus.BAD_REQUEST);
        }

        if (conta.VALOR < data.VALOR) {
          throw new HttpException('Saldo insuficiente para realizar a transferência', HttpStatus.BAD_REQUEST);
        }

        // Update source account balance
        await this.prisma.conta.update({
          where: { CODCON: conta.CODCON },
          data: { VALOR: conta.VALOR - data.VALOR }
        });

        // Update destination account balance
        await this.prisma.conta.update({
          where: { CODCON: contaDestino.CODCON },
          data: { VALOR: contaDestino.VALOR + data.VALOR }
        });
      }

      // Create the transaction record
      return await this.prisma.transacao.create({
        data: {
          TIPO: data.TIPO,
          VALOR: data.VALOR,
          DESCRICAO: data.DESCRICAO,
          CODCON: data.CODCON
        },
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException(
        error.message || 'Erro ao criar transação',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.transacao.findMany();
    } catch (error) {
      throw new HttpException(
        error.message || 'Erro ao listar transações',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(id: number) {
    try {
      const transacao = await this.prisma.transacao.findFirst({
        where: { CODTRANS: id },
      });

      if (!transacao) {
        throw new HttpException('Transação não encontrada', HttpStatus.NOT_FOUND);
      }

      return transacao;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException(
        error.message || 'Erro ao buscar transação',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
  
}
