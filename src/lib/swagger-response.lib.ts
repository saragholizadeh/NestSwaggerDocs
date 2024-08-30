import { applyDecorators, HttpStatus } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiUnsupportedMediaTypeResponse,
} from '@nestjs/swagger';
import {
  ForbiddenExceptionResponse,
  BadRequestExceptionResponse,
  UnAuthorizedExceptionResponse,
  UnsupportedMediaTypeExceptionResponse,
  NotFoundExceptionResponse,
  InternalExceptionResponse,
} from '.';

export interface IShowResponseParams {
  showNotFound?: boolean;
  showCreated?: boolean;
  showUnAuthorized?: boolean;
  showUnSupportedMediaType?: boolean;
  forbidden?: boolean;
}

export interface ICreateExampleResponseParams {
  type?: any;
  status?: HttpStatus;
  isGetMethod?: boolean;
  isArray?: boolean;
  showResponse?: IShowResponseParams;
}

export function ExampleResponse(params?: ICreateExampleResponseParams) {
  const decorators = [
    !params?.showResponse?.showCreated &&
      ApiOkResponse({
        status: HttpStatus.OK,
        description: 'Success',
        type: params?.type,
        isArray: params?.isArray || false,
      }),
    params?.showResponse?.showCreated &&
      ApiCreatedResponse({
        status: HttpStatus.CREATED,
        description: 'Success',
        type: params?.type,
        isArray: params?.isArray || false,
      }),
    params?.showResponse?.forbidden &&
      ApiForbiddenResponse({
        status: HttpStatus.FORBIDDEN,
        description: 'Access denied',
        type: ForbiddenExceptionResponse,
      }),
    ApiBadRequestResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Failed',
      type: BadRequestExceptionResponse,
    }),
    (params?.showResponse?.showUnAuthorized === undefined ||
      params?.showResponse?.showUnAuthorized) &&
      ApiUnauthorizedResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized',
        type: UnAuthorizedExceptionResponse,
      }),
    (params?.showResponse?.showUnSupportedMediaType === undefined ||
      params?.showResponse?.showUnSupportedMediaType) &&
      ApiUnsupportedMediaTypeResponse({
        status: HttpStatus.UNSUPPORTED_MEDIA_TYPE,
        description: 'Unsupported media type',
        type: UnsupportedMediaTypeExceptionResponse,
      }),
    (params?.showResponse?.showNotFound === undefined ||
      params?.showResponse?.showNotFound) &&
      ApiNotFoundResponse({
        status: HttpStatus.NOT_FOUND,
        description: ' Source not found',
        type: NotFoundExceptionResponse,
      }),
    ApiInternalServerErrorResponse({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      description: 'Server error',
      type: InternalExceptionResponse,
    }),
  ];

  return applyDecorators(...decorators.filter((x) => x));
}
