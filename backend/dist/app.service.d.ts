import { PrismaService } from './services/prisma.service';
export declare class AppService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    setupInicial(): Promise<void>;
}
