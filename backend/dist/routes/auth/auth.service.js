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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../services/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const jsonwebtoken_1 = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async login(body) {
        try {
            const busca = await this.prisma.login.findFirst({});
            if (busca) {
                if (body.USUARIO === busca.USUARIO && body.SENHA === busca.SENHA) {
                    const token = await this.assinaToken({
                        USUARIO: body.USUARIO,
                    });
                    return { token };
                }
                else {
                    throw new common_1.HttpException('Usuario ou senha incorretos', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            const primeiroUsu = await this.prisma.login.create({
                data: { USUARIO: body.USUARIO, SENHA: body.SENHA },
            });
            const token = await this.assinaToken({
                USUARIO: body.USUARIO,
            });
            return { token };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async recuperarSenha(body) {
        try {
            const busca = await this.prisma.login.findFirst({
                where: { USUARIO: body.USUARIO },
            });
            if (busca) {
                return busca;
            }
            else {
                throw new common_1.HttpException('Usuario informado incorretamente', common_1.HttpStatus.NOT_FOUND);
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async trocarSenha(body, jwt) {
        try {
            const token = (0, jsonwebtoken_1.decode)(jwt);
            const busca = await this.prisma.login.findFirst({
                where: { USUARIO: token.USUARIO },
            });
            if (busca) {
                return await this.prisma.login.update({
                    where: { CODUSER: busca.CODUSER },
                    data: {
                        SENHA: body.SENHA,
                    },
                });
            }
            else {
                throw new common_1.HttpException('Usuario não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async assinaToken(args) {
        const payload = args;
        return await this.jwt.signAsync(payload, {
            expiresIn: '24h',
            secret: 'freela',
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map