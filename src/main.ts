import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TransformInterceptor } from './lib';

async function bootstrap() {
  const logger = new Logger('NestSwaggerDocs');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestSwaggerDocs')
    .setDescription('See the structure of all possibles responses here!')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger/api/document', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  app.useGlobalInterceptors(new TransformInterceptor());
  const port = process.env.PORT || 5000;
  await app.listen(port, () => logger.log(`Server running at port: ${port}`));
}
bootstrap();
