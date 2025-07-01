import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AuthServiceDef } from '../services';
import { AuthGuard } from 'src/guard/auth/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AuthServiceDef.NAME) private readonly authClient: ClientProxy,
  ) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return await firstValueFrom(
      this.authClient.send(AuthServiceDef.PATTERNS.Login, body),
    );
  }

  @UseGuards(AuthGuard)
  @Get('profile/:email')
  async profile(@Param('email') email: string) {
    return await firstValueFrom(
      this.authClient.send(AuthServiceDef.PATTERNS.Profile, email),
    );
  }
}
