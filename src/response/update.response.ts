import { ApiProperty } from '@nestjs/swagger';
import { SuccessResponse } from 'src/lib';

export interface IUpdateResponse {
  id: number;
  updatedData: string;
}

export class UpdateResponse extends SuccessResponse {
  @ApiProperty({
    example: {
      id: 1,
      updatedData: 'Name',
    },
  })
  data: IUpdateResponse;
}
