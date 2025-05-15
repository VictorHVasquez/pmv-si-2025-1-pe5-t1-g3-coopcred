import { PrismaService } from 'src/services/prisma.service';
import { ClienteDto } from '../aluguel/dto/cliente.dto';
export declare class ClienteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    cadastrar(body: ClienteDto, jwt: string): Promise<{
        CODCLI: number;
        NOME: string;
        CONTATO: string;
        DATAINC: Date;
        DATAALT: Date;
    }>;
    listar(body: any, jwt: string): Promise<({
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
