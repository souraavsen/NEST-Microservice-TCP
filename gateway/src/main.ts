import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  await app.listen(port);
  Logger.log(`🚀 GATEWAY running in http://127.0.0.1:${port}`);
}
bootstrap();

//TCP configuration

// const port = 3000;
// const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//   AppModule,
//   {
//     transport: Transport.TCP,
//     options: {
//       host: '127.0.0.1',
//       port,
//     },
//   },
// );
// await app.listen();

// Logger.log(`🚀 GATEWAY running in TCP http://127.0.0.1:${port}`);
