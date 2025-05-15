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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const categoria_service_1 = require("./categoria.service");
const auth_guard_1 = require("../auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const cadastrar_categoria_dto_1 = require("./dto/categoria/cadastrar-categoria.dto");
const atualiza_categoria_dto_1 = require("./dto/categoria/atualiza-categoria.dto");
const buscar_categoria_dto_1 = require("./dto/categoria/buscar-categoria.dto");
const listar_status_dto_1 = require("./dto/listar-status.dto");
const produto_service_1 = require("./produto.service");
const cadastrar_produto_dto_1 = require("./dto/produto/cadastrar-produto.dto");
const atualizar_produto_dto_1 = require("./dto/produto/atualizar-produto.dto");
const buscar_produto_dto_1 = require("./dto/produto/buscar-produto.dto");
const listar_produto_dto_1 = require("./dto/produto/listar-produto.dto");
let ProdutosController = class ProdutosController {
    constructor(categoriaService, produtoService) {
        this.categoriaService = categoriaService;
        this.produtoService = produtoService;
    }
    cadastrar(request, body) {
        const token = request.headers.authorization.split(' ')[1];
        return this.produtoService.cadastra(body, token);
    }
    atualizar(request, body) {
        const token = request.headers.authorization.split(' ')[1];
        return this.produtoService.atualiza(body, token);
    }
    buscar(request, body) {
        const token = request.headers.authorization.split(' ')[1];
        return this.produtoService.buscar(body, token);
    }
    listar(request, body) {
        const token = request.headers.authorization.split(' ')[1];
        return this.produtoService.listar(body, token);
    }
    cadastrarCategoria(request, body) {
        const token = request.headers.authorization.split(' ')[1];
        return this.categoriaService.cadastra(body, token);
    }
    atualizarCategoria(request, body) {
        const token = request.headers.authorization.split(' ')[1];
        return this.categoriaService.atualiza(body, token);
    }
    buscarCategoria(request, body) {
        const token = request.headers.authorization.split(' ')[1];
        return this.categoriaService.buscar(body, token);
    }
    listarCategoria(request, body) {
        const token = request.headers.authorization.split(' ')[1];
        return this.categoriaService.listar(body, token);
    }
};
exports.ProdutosController = ProdutosController;
__decorate([
    (0, common_1.Post)('/cadastrar'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cadastrar_produto_dto_1.CadastrarProdutodto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "cadastrar", null);
__decorate([
    (0, common_1.Patch)('/atualizar'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, atualizar_produto_dto_1.AtualizarProdutodto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Get)('/buscar'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, buscar_produto_dto_1.BuscarProdutoDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)('/listar'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, listar_produto_dto_1.ListarProdutoDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "listar", null);
__decorate([
    (0, common_1.Post)('/cadastrar/categoria'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cadastrar_categoria_dto_1.CadastrarCategoriaDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "cadastrarCategoria", null);
__decorate([
    (0, common_1.Patch)('/atualizar/categoria'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, atualiza_categoria_dto_1.AtualizarCategoriaDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "atualizarCategoria", null);
__decorate([
    (0, common_1.Get)('/buscar/categoria'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, buscar_categoria_dto_1.BuscarCategoriaDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "buscarCategoria", null);
__decorate([
    (0, common_1.Get)('/listar/categoria'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, listar_status_dto_1.ListarStatusDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "listarCategoria", null);
exports.ProdutosController = ProdutosController = __decorate([
    (0, common_1.Controller)('produto'),
    (0, swagger_1.ApiTags)('Produto'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [categoria_service_1.CategoriaService,
        produto_service_1.ProdutoService])
], ProdutosController);
//# sourceMappingURL=produto.controller.js.map