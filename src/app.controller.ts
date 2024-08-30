import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ExampleResponse } from './lib';
import { RegisterResponse } from './response';
import { RegisterDto } from './dto';

@Controller('app')
export class AppController {
  constructor() {}

  @ExampleResponse({
    type: RegisterResponse,
    showResponse: {
      showNotFound: false,
      showCreated: true,
      showUnSupportedMediaType: false,
      showUnAuthorized: false,
    },
  })
  @ApiTags('Auth')
  @Post('/auth/register')
  async register(@Body() registerDto: RegisterDto) {
    return {
      data: {
        id: 1,
        name: registerDto.name,
        token:
          'eyJFaKeciOiJIUzIe5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaSIsImlhdCI6MTYFaKewNjEwNiwiZXhwIjozNzY5MjYwNjEwNn0.hN70LLzng5fehIce99DnvFaKewGlMfDE==',
      },
    };
  }
}
