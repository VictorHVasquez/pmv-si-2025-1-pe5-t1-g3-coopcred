import { PrismaService } from 'src/services/prisma.service';
import { CadastrarProdutodto } from './dto/produto/cadastrar-produto.dto';
import { AtualizarProdutodto } from './dto/produto/atualizar-produto.dto';
import { BuscarProdutoDto } from './dto/produto/buscar-produto.dto';
import { ListarProdutoDto } from './dto/produto/listar-produto.dto';
export declare class ProdutoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    cadastra(body: CadastrarProdutodto, jwt: string): Promise<{
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
    atualiza(body: AtualizarProdutodto, jwt: string): Promise<{
        CODPROD: number;
        CODIGO: string;
        DESCRICAO: string;
        STATUS: number;
        CODCAT: number;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    buscar(body: BuscarProdutoDto, jwt: string): Promise<{
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
    listar(body: ListarProdutoDto, jwt: string): Promise<({
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
}
