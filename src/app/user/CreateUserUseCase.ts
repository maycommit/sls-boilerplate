import { UserRepository } from 'src/domain/User';
import { CreateUserInput } from './input/CreateUserInput';
import { UserOutput } from './output/UserOutput';


export class CreateUserUseCase {

  constructor(private readonly userRepository: UserRepository) {}
  
  async execute(input: CreateUserInput): Promise<UserOutput> {
    const newUser = input.toUser();

    await this.userRepository.save(newUser);

    return UserOutput.fromUser(newUser);
  }

}