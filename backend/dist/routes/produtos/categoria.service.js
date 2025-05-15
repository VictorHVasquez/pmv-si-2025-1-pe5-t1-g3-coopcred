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
exports.CategoriaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
let CategoriaService = class CategoriaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async cadastra(body, jwt) {
        try {
            const busca = await this.prisma.categoria.findFirst({
                where: { DESCRICAO: body.DESCRICAO },
            });
            if (busca) {
                throw new common_1.HttpException('Categoria já cadastrada', common_1.HttpStatus.AMBIGUOUS);
            }
            const cadastra = await this.prisma.categoria.create({
                data: { DESCRICAO: body.DESCRICAO },
            });
            return cadastra;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async atualiza(body, jwt) {
        try {
            const busca = await this.prisma.categoria.findFirst({
                where: { CODCAT: body.CODCAT },
            });
            if (!busca) {
                throw new common_1.HttpException('Categoria não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            const duplicidade = await this.prisma.categoria.findFirst({
                where: { DESCRICAO: body.DESCRICAO },
            });
            if (duplicidade) {
                if (duplicidade.CODCAT !== busca.CODCAT) {
                    throw new common_1.HttpException('Outra categoria já cadastrada com essa descrição', common_1.HttpStatus.AMBIGUOUS);
                }
            }
            const atualiza = await this.prisma.categoria.update({
                where: { CODCAT: busca.CODCAT },
                data: { DESCRICAO: body.DESCRICAO, STATUS: body.STATUS },
            });
            return atualiza;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async buscar(body, jwt) {
        try {
            const busca = await this.prisma.categoria.findFirst({
                where: { CODCAT: body.CODCAT },
                include: { PRODUTOS: true },
            });
            if (!busca) {
                throw new common_1.HttpException('Categoria não encontrada', common_1.HttpStatus.NOT_FOUND);
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
                const lista = await this.prisma.categoria.findMany({
                    where: { STATUS: 1 },
                    include: { PRODUTOS: true },
                });
                return lista;
            }
            else if (body.STATUS == 'false') {
                const lista = await this.prisma.categoria.findMany({
                    where: { STATUS: 0 },
                    include: { PRODUTOS: true },
                });
                return lista;
            }
            else {
                const lista = await this.prisma.categoria.findMany({
                    include: { PRODUTOS: true },
                });
                return lista;
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
exports.CategoriaService = CategoriaService;
exports.CategoriaService = CategoriaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriaService);
//# sourceMappingURL=categoria.service.js.map