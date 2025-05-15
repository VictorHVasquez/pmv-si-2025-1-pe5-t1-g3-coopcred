"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    const logger = new common_1.Logger('Freela:');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Freela')
        .setDescription('Freela Doc')
        .setVersion('1.0')
        .addTag('Freela')
        .addBearerAuth({
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT, () => {
        logger.verbose(`[BACK-END] EM [ http://localhost:${process.env.PORT} ]`);
        logger.verbose(`[BANCO] -> [ http://172.19.192.1:5555 ]`);
        logger.verbose(`[DOCUMENTAÇAO] -> [ http://localhost:${process.env.PORT}/api ]`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map