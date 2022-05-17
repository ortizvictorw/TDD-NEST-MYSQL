import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('STUDENT')
    .setDescription('API')
    .setVersion('1.0')
    .addTag('challenge')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  //await app.listen(process.env.APP_PORT || 3002);
  await app.listen(process.env.APP_PORT || 3005);

  Logger.log(`Server is running at ${await app.getUrl()}`);

}
bootstrap();
