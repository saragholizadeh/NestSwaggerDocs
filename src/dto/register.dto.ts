import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';
export class RegisterDto {
  @ApiProperty({
    type: String,
    minLength: 4,
    maxLength: 25,
  })
  @IsString()
  @IsNotEmpty()
  @Length(4, 25)
  name: string;
}
