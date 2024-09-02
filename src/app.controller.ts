import {
  Body,
  Controller,
  Post,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  LoginDto,
  RegisterDto,
  RegisterResponse,
  ExampleResponse,
  LoginResponse,
  UpdateResponse,
  DeleteResponse,
} from '.';

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
        token: 'BLABLABLA',
      },
    };
  }
  @ApiTags('Auth')
  @Post('/auth/login')
  @HttpCode(HttpStatus.OK)
  @ExampleResponse({
    type: LoginResponse,
    showResponse: { showNotFound: false, showUnSupportedMediaType: false },
  })
  async login(@Body() loginDto: LoginDto) {
    return {
      data: {
        id: 1,
        name: loginDto.name,
        token: 'BLABLABLA',
      },
    };
  }

  @ApiTags('Example CRUD')
  @ExampleResponse({
    type: UpdateResponse,
    showResponse: { forbidden: true },
  })
  @Put('/update')
  async updateSMT(@Query('id', ParseIntPipe) id: number) {
    return {
      id,
      updatedData: 'BLAH',
    };
  }

  @ApiTags('Example CRUD')
  @ExampleResponse({
    type: DeleteResponse,
    showResponse: { showUnSupportedMediaType: false, forbidden: true },
  })
  @Delete('/delete')
  async deleteSMT(@Query('id', ParseIntPipe) id: number) {
    return {
      id,
      message: 'Successfully deleted',
    };
  }
}
