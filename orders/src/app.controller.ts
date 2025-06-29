import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('user-orders')
  async getUserOrders(@Payload() userId: string) {
    console.log('GetUserOrders Called');
    return this.appService.getOrdersByUserId(+userId);
  }
}
