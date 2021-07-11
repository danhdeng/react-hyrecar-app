import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //use global error handler as default handler
  // app.useGlobalFilters(new BaseExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || 9000;
  await app.listen(port);
}
bootstrap();
