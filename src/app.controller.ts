import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Welcome to your Staff Management API!';
  }

  @Get('/about')
  about(): string {
    return 'This is the Staff Management API. It allows you to manage businesses and staff members.';
  }

  @Get('/health')
  healthCheck(): string {
    return 'API is up and running!';
  }
}
