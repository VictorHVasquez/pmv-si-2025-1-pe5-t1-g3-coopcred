import { Request } from 'express';
import { ClienteService } from './cliente.service';
import { ClienteDto } from '../aluguel/dto/cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    cadastrar(request: Request, body: ClienteDto): Promise<{
        CODCLI: number;
        NOME: string;
        CONTATO: string;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    buscar(request: Request, body: any): Promise<({
        ALUGUEIS: ({
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
        })[];
    } & {
        CODCLI: number;
        NOME: string;
        CONTATO: string;
        DATAINC: Date;
        DATAALT: Date;
    })[]>;
}
