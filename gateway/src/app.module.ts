import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './services/auth/auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthServiceDef, OrderServiceDef } from './services/services';
import { OrdersController } from './services/orders/orders.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: AuthServiceDef.NAME,
        transport: Transport.TCP,
        options: {
          host: AuthServiceDef.HOST,
          port: AuthServiceDef.PORT,
        },
      },
      {
        name: OrderServiceDef.NAME,
        transport: Transport.TCP,
        options: {
          host: OrderServiceDef.HOST,
          port: OrderServiceDef.PORT,
        },
      },
    ]),
  ],
  controllers: [AppController, AuthController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
