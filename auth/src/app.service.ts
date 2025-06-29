import { Get, Injectable, Post } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to 🚀 AUTH-SERVICE!';
  }

  login(credential: { useranme: string; password: string }) {
    return { message: `AUTH-SERVICE: Login`, data: credential };
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
}
