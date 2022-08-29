import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { MongooseUserRepository } from 'src/repositories/impl/MongooseUserRepository';
import { CreateUserUseCase } from 'src/usecases/CreateUserUseCase';

import { createUserSchema, CreateUserSchema } from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<CreateUserSchema> = async (event) => {
  const userRepository = new MongooseUserRepository()
  const userUseCase =  new CreateUserUseCase(userRepository)

  const createdUser = await userUseCase.execute()


  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(hello);
