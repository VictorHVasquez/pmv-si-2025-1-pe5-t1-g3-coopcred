"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("./services/prisma.service");
const auth_controller_1 = require("./routes/auth/auth.controller");
const auth_service_1 = require("./routes/auth/auth.service");
const produto_service_1 = require("./routes/produtos/produto.service");
const categoria_service_1 = require("./routes/produtos/categoria.service");
const produto_controller_1 = require("./routes/produtos/produto.controller");
const aluguel_service_1 = require("./routes/aluguel/aluguel.service");
const cliente_service_1 = require("./routes/clientes/cliente.service");
const aluguel_controller_1 = require("./routes/aluguel/aluguel.controller");
const cliente_controller_1 = require("./routes/clientes/cliente.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot()],
        controllers: [
            app_controller_1.AppController,
            auth_controller_1.AuthController,
            produto_controller_1.ProdutosController,
            aluguel_controller_1.AluguelController,
            cliente_controller_1.ClienteController,
        ],
        providers: [
            app_service_1.AppService,
            prisma_service_1.PrismaService,
            jwt_1.JwtService,
            auth_service_1.AuthService,
            produto_service_1.ProdutoService,
            categoria_service_1.CategoriaService,
            aluguel_service_1.AluguelService,
            cliente_service_1.ClienteService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map