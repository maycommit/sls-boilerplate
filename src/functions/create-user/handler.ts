import { middyfy } from '@libs/lambda';
import { CreateUserUseCase } from 'src/app/user/CreateUserUseCase';
import { CreateUserInput } from 'src/app/user/input/CreateUserInput';
import { MongooseUserRepository } from 'src/infra/repository/MongooseUserRepository';

const createUser = async (event) => {
  const createUserInput = new CreateUserInput(event.body);
  const userRepository = new MongooseUserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);

  const output = await createUserUseCase.execute(createUserInput);

  return output;
};

export const main = middyfy(createUser)
