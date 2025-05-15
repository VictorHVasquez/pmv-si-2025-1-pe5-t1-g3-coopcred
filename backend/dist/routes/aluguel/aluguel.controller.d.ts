import { Request } from 'express';
import { AluguelService } from './aluguel.service';
import { CadastrarAluguelDto } from './dto/cadastrar-aluguel.dto';
import { AtualizarAluguelDto } from './dto/atualizar-aluguel.dto';
import { BuscarAluguelDto } from './dto/buscar-aluguel.dto';
import { ListarStatusDto } from './dto/listar-status.dto';
import { FaturarDto } from './dto/faturar-aluguel.dto';
export declare class AluguelController {
    private readonly aluguelService;
    constructor(aluguelService: AluguelService);
    cadastrar(request: Request, body: CadastrarAluguelDto): Promise<{
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
    atualizar(request: Request, body: AtualizarAluguelDto): Promise<{
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
    buscar(request: Request, body: BuscarAluguelDto): Promise<{
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
    remover(request: Request, body: BuscarAluguelDto): Promise<{
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
    listar(request: Request, body: ListarStatusDto): Promise<({
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
    cadastrarfat(request: Request, body: FaturarDto): Promise<{
        CODFAT: number;
        CUSTO: number;
        PRECOFINAL: number;
        DATAFATURADO: Date;
        CODALU: number;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    buscarFat(request: Request, body: any): Promise<({
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
    listarFat(request: Request, body: any): Promise<{
        CODFAT: number;
        CUSTO: number;
        PRECOFINAL: number;
        DATAFATURADO: Date;
        CODALU: number;
        DATAINC: Date;
        DATAALT: Date;
    }[]>;
}
