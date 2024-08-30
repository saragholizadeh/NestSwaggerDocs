import { ApiProperty } from '@nestjs/swagger';
import { SuccessResponse } from 'src/lib/response-example.lib';

export interface IRegisterResponse {
  id: number;
  name: string;
  token: string;
}

export class RegisterResponse extends SuccessResponse {
  @ApiProperty({
    example: {
      id: 1,
      name: 'Name',
      token:
        'eyJFaKeciOiJIUzIe5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaSIsImlhdCI6MTYFaKewNjEwNiwiZXhwIjozNzY5MjYwNjEwNn0.hN70LLzng5fehIce99DnvFaKewGlMfDE==',
    },
  })
  data: IRegisterResponse;
}
