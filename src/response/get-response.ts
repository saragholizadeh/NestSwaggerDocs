import { ApiProperty } from '@nestjs/swagger';
import { SuccessResponse } from 'src/lib';

export interface IGetResponse {
  id: number;
  data: IExampleData;
}

interface IExampleData {
  key: string;
}

export class GetResponse extends SuccessResponse {
  @ApiProperty({
    example: {
      id: 3,
      data: 'value',
    },
  })
  data: IGetResponse;
}
