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
exports.ProdutoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
let ProdutoService = class ProdutoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async cadastra(body, jwt) {
        try {
            const cat = await this.prisma.categoria.findFirst({
                where: { DESCRICAO: body.CATEGORIA },
            });
            if (!cat) {
                throw new common_1.HttpException('Categoria não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            const codigo = await this.prisma.produto.findFirst({
                where: {
                    CODIGO: body.CODIGO,
                },
            });
            if (codigo) {
                throw new common_1.HttpException('Codigo já cadastrado para outro produto', common_1.HttpStatus.AMBIGUOUS);
            }
            const cadastra = await this.prisma.produto.create({
                data: {
                    DESCRICAO: body.DESCRICAO,
                    CODCAT: cat.CODCAT,
                    CODIGO: body.CODIGO,
                },
                include: { CATEGORIA: true },
            });
            return cadastra;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async atualiza(body, jwt) {
        try {
            const busca = await this.prisma.produto.findFirst({
                where: { CODPROD: body.CODPROD },
            });
            if (!busca) {
                throw new common_1.HttpException('Produto não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            const cat = await this.prisma.categoria.findFirst({
                where: { DESCRICAO: body.CATEGORIA },
            });
            if (!cat) {
                throw new common_1.HttpException('Categoria não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            if (body.CODIGO) {
                const codigo = await this.prisma.produto.findFirst({
                    where: {
                        CODIGO: body.CODIGO,
                        CODCAT: cat.CODCAT,
                    },
                });
                if (codigo.CODPROD !== busca.CODPROD) {
                    throw new common_1.HttpException('Codigo já cadastrado para outro produto', common_1.HttpStatus.AMBIGUOUS);
                }
            }
            const cadastra = await this.prisma.produto.update({
                where: { CODPROD: busca.CODPROD },
                data: {
                    DESCRICAO: body.DESCRICAO,
                    CODCAT: cat.CODCAT,
                    CODIGO: body.CODIGO,
                    STATUS: body.STATUS,
                },
            });
            return cadastra;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async buscar(body, jwt) {
        try {
            const busca = await this.prisma.produto.findFirst({
                where: { CODPROD: body.CODPROD },
                include: { CATEGORIA: true },
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
            const lista = await this.prisma.produto.findMany({
                include: { CATEGORIA: true, ALUGUEIS: { where: { STATUS: 1 } } },
            });
            return lista;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
exports.ProdutoService = ProdutoService;
exports.ProdutoService = ProdutoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProdutoService);
//# sourceMappingURL=produto.service.js.map