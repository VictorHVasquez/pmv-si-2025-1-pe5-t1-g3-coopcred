import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './services/prisma.service';
import { AuthController } from './routes/auth/auth.controller';
import { AuthService } from './routes/auth/auth.service';

import { ClienteService } from './routes/clientes/cliente.service';

import { ClienteController } from './routes/clientes/cliente.controller';
import { TransacaoController } from './routes/transacao/transacao.controller';
import { ContaController } from './routes/conta/conta.controller';
import { TransacaoService } from './routes/transacao/transacao.service';
import { ContaService } from './routes/conta/conta.service';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    AppController,
    AuthController,
    ClienteController,
    TransacaoController,
    ContaController,

  ],
  providers: [
    AppService,
    PrismaService,
    JwtService,
    AuthService,
    ClienteService,
    TransacaoService,
    ContaService,
  ],
})
export class AppModule {}
