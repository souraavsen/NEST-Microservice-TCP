import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  async login(@Body() credential: { useranme: string; password: string }) {
    return this.appService.login(credential);
  }

  @MessagePattern('auth-login')
  async loginEvent(
    @Payload() credential: { useranme: string; password: string },
  ) {
    return this.appService.login(credential);
  }

  @MessagePattern('profile')
  async profileEvent(@Payload() email: string) {
    console.log('ProfileEvent Called');
    return this.appService.profile(email);
  }
}
