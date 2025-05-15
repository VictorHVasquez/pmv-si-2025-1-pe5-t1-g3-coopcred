import { PrismaService } from 'src/services/prisma.service';
import { BuscarCategoriaDto } from './dto/categoria/buscar-categoria.dto';
import { AtualizarCategoriaDto } from './dto/categoria/atualiza-categoria.dto';
import { CadastrarCategoriaDto } from './dto/categoria/cadastrar-categoria.dto';
import { ListarStatusDto } from './dto/listar-status.dto';
export declare class CategoriaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    cadastra(body: CadastrarCategoriaDto, jwt: string): Promise<{
        CODCAT: number;
        DESCRICAO: string;
        STATUS: number;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    atualiza(body: AtualizarCategoriaDto, jwt: string): Promise<{
        CODCAT: number;
        DESCRICAO: string;
        STATUS: number;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    buscar(body: BuscarCategoriaDto, jwt: string): Promise<{
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
    listar(body: ListarStatusDto, jwt: string): Promise<({
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
