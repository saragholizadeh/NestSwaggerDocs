import { ApiProperty } from '@nestjs/swagger';
import { SuccessResponse } from 'src/lib';

export interface IDeleteResponse {
  id: number;
  message: string;
}

export class DeleteResponse extends SuccessResponse {
  @ApiProperty({
    example: {
      id: 1,
      message: 'Successfully deleted',
    },
  })
  data: IDeleteResponse;
}
