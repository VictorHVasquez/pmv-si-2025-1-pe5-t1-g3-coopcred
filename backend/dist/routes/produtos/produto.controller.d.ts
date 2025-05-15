import { CategoriaService } from './categoria.service';
import { Request } from 'express';
import { CadastrarCategoriaDto } from './dto/categoria/cadastrar-categoria.dto';
import { AtualizarCategoriaDto } from './dto/categoria/atualiza-categoria.dto';
import { BuscarCategoriaDto } from './dto/categoria/buscar-categoria.dto';
import { ListarStatusDto } from './dto/listar-status.dto';
import { ProdutoService } from './produto.service';
import { CadastrarProdutodto } from './dto/produto/cadastrar-produto.dto';
import { AtualizarProdutodto } from './dto/produto/atualizar-produto.dto';
import { BuscarProdutoDto } from './dto/produto/buscar-produto.dto';
import { ListarProdutoDto } from './dto/produto/listar-produto.dto';
export declare class ProdutosController {
    private readonly categoriaService;
    private readonly produtoService;
    constructor(categoriaService: CategoriaService, produtoService: ProdutoService);
    cadastrar(request: Request, body: CadastrarProdutodto): Promise<{
        CATEGORIA: {
            CODCAT: number;
            DESCRICAO: string;
            STATUS: number;
            DATAINC: Date;
            DATAALT: Date;
        };
    } & {
        CODPROD: number;
        CODIGO: string;
        DESCRICAO: string;
        STATUS: number;
        CODCAT: number;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    atualizar(request: Request, body: AtualizarProdutodto): Promise<{
        CODPROD: number;
        CODIGO: string;
        DESCRICAO: string;
        STATUS: number;
        CODCAT: number;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    buscar(request: Request, body: BuscarProdutoDto): Promise<{
        CATEGORIA: {
            CODCAT: number;
            DESCRICAO: string;
            STATUS: number;
            DATAINC: Date;
            DATAALT: Date;
        };
    } & {
        CODPROD: number;
        CODIGO: string;
        DESCRICAO: string;
        STATUS: number;
        CODCAT: number;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    listar(request: Request, body: ListarProdutoDto): Promise<({
        CATEGORIA: {
            CODCAT: number;
            DESCRICAO: string;
            STATUS: number;
            DATAINC: Date;
            DATAALT: Date;
        };
        ALUGUEIS: {
            CODALU: number;
            STATUS: number;
            DATAINICIO: Date;
            DATAFINAL: Date;
            ENDERECO: string;
            PRECOINICIAL: number;
            CODCLI: number;
            CODPROD: number;
            DATAINC: Date;
            DATAALT: Date;
        }[];
    } & {
        CODPROD: number;
        CODIGO: string;
        DESCRICAO: string;
        STATUS: number;
        CODCAT: number;
        DATAINC: Date;
        DATAALT: Date;
    })[]>;
    cadastrarCategoria(request: Request, body: CadastrarCategoriaDto): Promise<{
        CODCAT: number;
        DESCRICAO: string;
        STATUS: number;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    atualizarCategoria(request: Request, body: AtualizarCategoriaDto): Promise<{
        CODCAT: number;
        DESCRICAO: string;
        STATUS: number;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    buscarCategoria(request: Request, body: BuscarCategoriaDto): Promise<{
        PRODUTOS: {
            CODPROD: number;
            CODIGO: string;
            DESCRICAO: string;
            STATUS: number;
            CODCAT: number;
            DATAINC: Date;
            DATAALT: Date;
        }[];
    } & {
        CODCAT: number;
        DESCRICAO: string;
        STATUS: number;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    listarCategoria(request: Request, body: ListarStatusDto): Promise<({
        PRODUTOS: {
            CODPROD: number;
            CODIGO: string;
            DESCRICAO: string;
            STATUS: number;
            CODCAT: number;
            DATAINC: Date;
            DATAALT: Date;
        }[];
    } & {
        CODCAT: number;
        DESCRICAO: string;
        STATUS: number;
        DATAINC: Date;
        DATAALT: Date;
    })[]>;
}
