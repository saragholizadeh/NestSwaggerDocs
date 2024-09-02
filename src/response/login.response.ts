import { ApiProperty } from '@nestjs/swagger';
import { SuccessResponse } from 'src/lib';

export interface ILoginResponse {
  id: number;
  name: string;
  token: string;
}

export class LoginResponse extends SuccessResponse {
  @ApiProperty({
    example: {
      id: 1,
      name: 'Name',
      token:
        'eyJFaKeciOiJIUzI1NiIsfake5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaSIsImlhdCI6MTYFaKewNjEwNiwiZXhwIjozNzY5MjYwNjEwNn0.hN70LLzng5fepuPeRDhIce99DnvFaKewGlMfDE==',
    },
  })
  data: ILoginResponse;
}
