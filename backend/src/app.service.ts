import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  async setupInicial() {
    try {
      // const cadastro = await this.prisma.$transaction(async (tx) => {
      //   const categorias = [];
      //   categorias.push('CAÇAMBA');
      //   categorias.push('CAMINHAO');
      //   for (const categoria of categorias) {
      //     await tx.categoria.create({
      //       data: {
      //         DESCRICAO: categoria,
      //       },
      //     });
      //   }
      // });
      // return true;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
