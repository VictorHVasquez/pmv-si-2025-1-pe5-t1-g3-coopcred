import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  const logger = new Logger('Coopcred:');
  const config = new DocumentBuilder()
    .setTitle('Coopcred')
    .setDescription('Coopcred Doc')
    .setVersion('1.0')
    .addTag('Coopcred')
    .addBearerAuth({
      type: 'http',
      scheme: 'Bearer',
      bearerFormat: 'JWT',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT, () => {
    logger.verbose(`[BACK-END] EM [ http://localhost:${process.env.PORT} ]`);
    logger.verbose(`[BANCO] -> [ http://172.19.192.1:5555 ]`);
    logger.verbose(
      `[DOCUMENTAÇAO] -> [ http://localhost:${process.env.PORT}/api ]`,
    );
  });
}
bootstrap();
