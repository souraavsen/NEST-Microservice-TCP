import { Get, Injectable, Post } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to 🚀 AUTH-SERVICE!';
  }

  login(credential: { useranme: string; password: string }) {
    return {
      message: `AUTH-SERVICE: Login`,
      data: {
        ...credential,
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjc5MjgyMzksInVzZXJSb2xlcyI6WyJBRE1JTiIsIkRCX1JFQUQiLCJEQl9XUk',
      },
    };
  }

  profile(email: string) {
    return {
      message: `AUTH-SERVICE: Profile`,
      data: {
        id: 1111,
        email: email,
        username: 'sarahj_marketing',
        firstName: 'Sarah',
        lastName: 'Johnson',
      },
    };
  }

  validateToken(token: string) {
    return {
      message: 'AUTH-SERVICE: Validate - Success',
      valid: true,
      data: {
        id: 1111,
        email: 'a@gmail.com',
        token,
        username: 'sarahj_marketing',
        firstName: 'Sarah',
        lastName: 'Johnson',
      },
    };
  }
}
