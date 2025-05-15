import { PrismaService } from 'src/services/prisma.service';
import { CadastrarAluguelDto } from './dto/cadastrar-aluguel.dto';
import { AtualizarAluguelDto } from './dto/atualizar-aluguel.dto';
import { BuscarAluguelDto } from './dto/buscar-aluguel.dto';
import { ListarStatusDto } from './dto/listar-status.dto';
import { ClienteDto } from './dto/cliente.dto';
import { FaturarDto } from './dto/faturar-aluguel.dto';
export declare class AluguelService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    cadastra(body: CadastrarAluguelDto, jwt: string): Promise<{
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
    }>;
    atualiza(body: AtualizarAluguelDto, jwt: string): Promise<{
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
    }>;
    deletar(body: BuscarAluguelDto, jwt: string): Promise<{
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
    }>;
    buscar(body: BuscarAluguelDto, jwt: string): Promise<{
        CLIENTE: {
            CODCLI: number;
            NOME: string;
            CONTATO: string;
            DATAINC: Date;
            DATAALT: Date;
        };
        PRODUTO: {
            CODPROD: number;
            CODIGO: string;
            DESCRICAO: string;
            STATUS: number;
            CODCAT: number;
            DATAINC: Date;
            DATAALT: Date;
        };
    } & {
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
    }>;
    listar(body: ListarStatusDto, jwt: string): Promise<({
        CLIENTE: {
            CODCLI: number;
            NOME: string;
            CONTATO: string;
            DATAINC: Date;
            DATAALT: Date;
        };
        PRODUTO: {
            CODPROD: number;
            CODIGO: string;
            DESCRICAO: string;
            STATUS: number;
            CODCAT: number;
            DATAINC: Date;
            DATAALT: Date;
        };
    } & {
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
    })[]>;
    faturar(body: FaturarDto, jwt: string): Promise<{
        CODFAT: number;
        CUSTO: number;
        PRECOFINAL: number;
        DATAFATURADO: Date;
        CODALU: number;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    listarFaturado(body: any, jwt: string): Promise<{
        CODFAT: number;
        CUSTO: number;
        PRECOFINAL: number;
        DATAFATURADO: Date;
        CODALU: number;
        DATAINC: Date;
        DATAALT: Date;
    }[]>;
    buscarFaturado(body: any, jwt: string): Promise<({
        ALUGUEL: {
            CLIENTE: {
                CODCLI: number;
                NOME: string;
                CONTATO: string;
                DATAINC: Date;
                DATAALT: Date;
            };
            PRODUTO: {
                CODPROD: number;
                CODIGO: string;
                DESCRICAO: string;
                STATUS: number;
                CODCAT: number;
                DATAINC: Date;
                DATAALT: Date;
            };
        } & {
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
        };
    } & {
        CODFAT: number;
        CUSTO: number;
        PRECOFINAL: number;
        DATAFATURADO: Date;
        CODALU: number;
        DATAINC: Date;
        DATAALT: Date;
    })[]>;
    cadUpCliente(body: ClienteDto, jwt: string): Promise<{
        CODCLI: number;
        NOME: string;
        CONTATO: string;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    listarCliente(body: any, jwt: string): Promise<({
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
        CODCLI: number;
        NOME: string;
        CONTATO: string;
        DATAINC: Date;
        DATAALT: Date;
    })[]>;
}
