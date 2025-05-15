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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
let ClienteService = class ClienteService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async cadastrar(body, jwt) {
        try {
            const busca = await this.prisma.cliente.findFirst({
                where: { NOME: body.CLIENTE.toUpperCase() },
            });
            if (busca) {
                const update = await this.prisma.cliente.update({
                    where: { CODCLI: busca.CODCLI },
                    data: { NOME: body.CLIENTE.toUpperCase(), CONTATO: body.CONTATO },
                });
            }
            const cadastra = await this.prisma.cliente.create({
                data: { NOME: body.CLIENTE.toUpperCase(), CONTATO: body.CONTATO },
            });
            return cadastra;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async listar(body, jwt) {
        try {
            const cliente = await this.prisma.cliente.findMany({
                where: {},
                include: { ALUGUEIS: { include: { PRODUTO: true } } },
            });
            return cliente;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map