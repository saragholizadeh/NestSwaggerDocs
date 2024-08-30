import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

class ExceptionResponse {
  @ApiProperty({
    example: false,
    type: Boolean,
  })
  success: boolean;
}

export class InternalExceptionResponse extends ExceptionResponse {
  @ApiProperty({
    example: 'Server Error',
    type: String,
  })
  message: string;

  @ApiProperty({
    example: HttpStatus.INTERNAL_SERVER_ERROR,
    type: Number,
  })
  statusCode: HttpStatus;
}

export class UnAuthorizedExceptionResponse extends ExceptionResponse {
  @ApiProperty({
    example: 'Unauthorized',
    type: String,
  })
  message: string;

  @ApiProperty({
    example: HttpStatus.UNAUTHORIZED,
    type: Number,
  })
  statusCode: HttpStatus;
}

export class BadRequestExceptionResponse extends ExceptionResponse {
  @ApiProperty({
    example: 'Invalid request',
    type: String,
  })
  message: string;

  @ApiProperty({
    example: HttpStatus.BAD_REQUEST,
    type: Number,
  })
  statusCode: HttpStatus;
}

export class NotFoundExceptionResponse extends ExceptionResponse {
  @ApiProperty({
    example: 'Source not found.',
    type: String,
  })
  message: string;

  @ApiProperty({
    example: HttpStatus.NOT_FOUND,
    type: Number,
  })
  statusCode: HttpStatus;
}

export class ForbiddenExceptionResponse extends ExceptionResponse {
  @ApiProperty({
    example: 'Access denied',
    type: String,
  })
  message: string;

  @ApiProperty({
    example: HttpStatus.FORBIDDEN,
    type: Number,
  })
  statusCode: HttpStatus;
}

export class UnsupportedMediaTypeExceptionResponse extends ExceptionResponse {
  @ApiProperty({
    example: 'Unsupported media type provided',
    type: String,
  })
  message: string;

  @ApiProperty({
    example: HttpStatus.UNSUPPORTED_MEDIA_TYPE,
    type: Number,
  })
  statusCode: HttpStatus;
}

export class SuccessResponse {
  @ApiProperty({
    example: true,
    type: Boolean,
  })
  success?: boolean;

  @ApiProperty({
    example: 'Operation Successfully Completed.',
    type: String,
  })
  message?: string;
}
