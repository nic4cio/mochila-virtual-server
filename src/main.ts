import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // This will allow any origin to access the API
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // This will remove any properties that are not in the DTO
    }),
  ); 
  await app.listen(3333);
}
bootstrap();
