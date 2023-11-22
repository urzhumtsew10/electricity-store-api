import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';

// async function bootstrap() {
//   const app = await NestFactory.create<NestFastifyApplication>(
//     AppModule,
//     new FastifyAdapter(),
//   );

//   app.enableCors();

//   await app.listen(3030);
// }
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });
  await app.listen(3030);
}
bootstrap();
