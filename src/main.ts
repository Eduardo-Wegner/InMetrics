import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Challenge API Documentation')
    .setDescription('The Challenge API description')
    .setVersion('1.0')
    .addTag('InMetrics Challenge')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apiDocumentation', app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  
  await app.listen(3000);
}
bootstrap();
