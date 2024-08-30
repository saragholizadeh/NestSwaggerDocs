import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('NestSwaggerDocs');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder().setTitle('NestSwaggerDocs').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger/api/document', app, document);

  const port = process.env.PORT || 5000;
  await app.listen(port, () => logger.log(`Server running at port: ${port}`));
}
bootstrap();
