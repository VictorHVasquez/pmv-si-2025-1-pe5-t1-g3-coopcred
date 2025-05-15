"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AluguelService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
let AluguelService = class AluguelService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async cadastra(body, jwt) {
        try {
            const produto = await this.prisma.produto.findFirst({
                where: { CODPROD: body.CODPROD },
            });
            if (!produto) {
                throw new common_1.HttpException('Produto não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            const aluguel = await this.prisma.aluguel.findFirst({
                where: {
                    CODPROD: body.CODPROD,
                    STATUS: 1,
                },
            });
            if (aluguel) {
                throw new common_1.HttpException('Produto com aluguel em andamento.', common_1.HttpStatus.CONFLICT);
            }
            const cliente = await this.prisma.cliente.findFirst({
                where: { NOME: body.CLIENTE.toUpperCase() },
            });
            if (cliente) {
                const codcli = await this.prisma.cliente.update({
                    where: { CODCLI: cliente.CODCLI },
                    data: { CONTATO: body.CONTATO },
                });
                const cadastra = await this.prisma.aluguel.create({
                    data: {
                        CODPROD: body.CODPROD,
                        CODCLI: codcli.CODCLI,
                        DATAINICIO: body.DATAINICIO,
                        DATAFINAL: body.DATAFINAL,
                        ENDERECO: body.ENDERECO,
                        PRECOINICIAL: body.PRECOINICIAL,
                    },
                });
                await this.prisma.produto.update({
                    where: { CODPROD: produto.CODPROD },
                    data: { STATUS: 0 },
                });
                return cadastra;
            }
            else {
                const codcli = await this.prisma.cliente.create({
                    data: { NOME: body.CLIENTE.toUpperCase(), CONTATO: body.CONTATO },
                });
                const cadastra = await this.prisma.aluguel.create({
                    data: {
                        CODPROD: body.CODPROD,
                        CODCLI: codcli.CODCLI,
                        DATAINICIO: body.DATAINICIO,
                        DATAFINAL: body.DATAFINAL,
                        ENDERECO: body.ENDERECO,
                        PRECOINICIAL: body.PRECOINICIAL,
                    },
                });
                await this.prisma.produto.update({
                    where: { CODPROD: produto.CODPROD },
                    data: { STATUS: 0 },
                });
                return cadastra;
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async atualiza(body, jwt) {
        try {
            const busca = await this.prisma.aluguel.findFirst({
                where: { CODALU: body.CODALU },
            });
            if (!busca) {
                throw new common_1.HttpException('Aluguel não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            if (body.CONTATO) {
                await this.prisma.cliente.update({
                    where: { CODCLI: busca.CODCLI },
                    data: { CONTATO: body.CONTATO },
                });
            }
            const atualiza = await this.prisma.aluguel.update({
                where: { CODALU: busca.CODALU },
                data: {
                    DATAINICIO: body.DATAINICIO,
                    DATAFINAL: body.DATAFINAL,
                    ENDERECO: body.ENDERECO,
                    PRECOINICIAL: body.PRECOINICIAL,
                },
            });
            return atualiza;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async deletar(body, jwt) {
        try {
            const busca = await this.prisma.aluguel.findFirst({
                where: { CODALU: body.CODALU },
            });
            if (!busca) {
                throw new common_1.HttpException('Aluguel não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            const deletar = await this.prisma.aluguel.delete({
                where: { CODALU: body.CODALU },
            });
            return deletar;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async buscar(body, jwt) {
        try {
            const busca = await this.prisma.aluguel.findFirst({
                where: { CODALU: body.CODALU },
                include: { PRODUTO: true, CLIENTE: true },
            });
            if (!busca) {
                throw new common_1.HttpException('Aluguel não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            return busca;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async listar(body, jwt) {
        try {
            if (body.STATUS == 'true') {
                const alugueis = await this.prisma.aluguel.findMany({
                    where: { STATUS: 1 },
                    include: { PRODUTO: true, CLIENTE: true },
                });
                if (!alugueis) {
                    throw new common_1.HttpException('Categoria não encontrada', common_1.HttpStatus.NOT_FOUND);
                }
                return alugueis;
            }
            else if (body.STATUS == 'false') {
                const alugueis = await this.prisma.aluguel.findMany({
                    where: { STATUS: 0 },
                    include: { PRODUTO: true, CLIENTE: true },
                });
                if (!alugueis) {
                    throw new common_1.HttpException('Categoria não encontrada', common_1.HttpStatus.NOT_FOUND);
                }
                return alugueis;
            }
            const alugueis = await this.prisma.aluguel.findMany({
                where: {},
                include: { PRODUTO: true, CLIENTE: true },
            });
            if (!alugueis) {
                throw new common_1.HttpException('Categoria não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            return alugueis;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async faturar(body, jwt) {
        try {
            const busca = await this.prisma.aluguel.findFirst({
                where: { CODALU: body.CODALU },
            });
            if (!busca) {
                throw new common_1.HttpException('Aluguel não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            const atualiza = await this.prisma.aluguel.update({
                where: { CODALU: busca.CODALU },
                data: {
                    STATUS: 0,
                },
            });
            await this.prisma.produto.update({
                where: { CODPROD: busca.CODPROD },
                data: { STATUS: 1 },
            });
            const cadastra = await this.prisma.faturado.create({
                data: {
                    CODALU: body.CODALU,
                    PRECOFINAL: body.PRECOFINAL,
                    CUSTO: body.CUSTO,
                    DATAFATURADO: body.DATAFATURADO,
                },
            });
            return cadastra;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async listarFaturado(body, jwt) {
        try {
            const faturado = await this.prisma.faturado.findMany({
                where: { CODFAT: body.CODFAT },
            });
            if (!faturado) {
                throw new common_1.HttpException('Faturado não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            console.log(faturado);
            return faturado;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async buscarFaturado(body, jwt) {
        try {
            if (body.INICIO || body.FIM) {
                const dataInicioBody = new Date(body.INICIO);
                dataInicioBody.setHours(0, 0, 0, 0);
                const dataFimBody = new Date(body.FIM);
                dataFimBody.setHours(23, 59, 59, 999);
                const faturados = await this.prisma.faturado.findMany({
                    where: { DATAFATURADO: { gte: dataInicioBody, lte: dataFimBody } },
                    include: { ALUGUEL: { include: { PRODUTO: true, CLIENTE: true } } },
                });
                return faturados;
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async cadUpCliente(body, jwt) {
        try {
            const busca = await this.prisma.cliente.findFirst({
                where: { NOME: body.CLIENTE },
            });
            if (busca) {
                const update = await this.prisma.cliente.update({
                    where: { CODCLI: busca.CODCLI },
                    data: { NOME: body.CLIENTE, CONTATO: body.CONTATO },
                });
            }
            const cadastra = await this.prisma.cliente.create({
                data: { NOME: body.CLIENTE, CONTATO: body.CONTATO },
            });
            return cadastra;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async listarCliente(body, jwt) {
        try {
            const cliente = await this.prisma.cliente.findMany({
                where: {},
                include: { ALUGUEIS: true },
            });
            if (!cliente) {
                throw new common_1.HttpException('Categoria não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            return cliente;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
exports.AluguelService = AluguelService;
exports.AluguelService = AluguelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AluguelService);
//# sourceMappingURL=aluguel.service.js.map