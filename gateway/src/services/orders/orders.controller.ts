import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthServiceDef, OrderServiceDef } from '../services';
import { firstValueFrom } from 'rxjs';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(AuthServiceDef.NAME) private readonly authCLient: ClientProxy,
    @Inject(OrderServiceDef.NAME) private readonly orderCLient: ClientProxy,
  ) {}

  @Get('user-orders/:email')
  async userOrders(@Param('email') email: string) {
    const userDetails = await firstValueFrom(
      this.authCLient.send(AuthServiceDef.PATTERNS.Profile, email),
    );
    return await firstValueFrom(
      this.orderCLient.send(
        OrderServiceDef.PATTERNS.UserOrders,
        userDetails?.data?.id,
      ),
    );
  }
}
