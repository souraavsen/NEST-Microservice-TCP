import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import { AuthServiceDef } from 'src/services/services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AuthServiceDef.NAME) private readonly authClient: ClientProxy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Method 1: Using headers property (recommended)
    const authHeader = request.headers['authorization'];

    // Method 2: Alternative using get method
    // const authHeader = request.get('Authorization');

    // Method 3: Using header() method (note: singular 'header')
    // const authHeader = request.header('authorization');

    if (!authHeader) {
      throw new UnauthorizedException('Token Not Provided');
    }

    if (!authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'Invalid token format. Expected Bearer token',
      );
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Token Not Provided');
    }

    console.log({ token });

    try {
      const result = await firstValueFrom(
        this.authClient.send(AuthServiceDef.PATTERNS.ValidateToken, token),
      );

      if (!result?.valid) {
        throw new UnauthorizedException('Invalid Token');
      }

      request.user = {
        userId: result?.data?.id,
        role: result?.data?.role,
      };

      return true;
    } catch (error) {
      console.error('Token validation error:', error);
      throw new UnauthorizedException('Token validation failed');
    }
  }
}
