import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  //await app.listen(process.env.APP_PORT || 3002);
  await app.listen(process.env.APP_PORT || 3004);

  Logger.log(`Server is running at ${await app.getUrl()}`);

}
bootstrap();
