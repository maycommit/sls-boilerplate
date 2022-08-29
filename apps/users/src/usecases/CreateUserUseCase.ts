import { UserRepository } from "src/repositories/repositories";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute() {
    this.userRepository.save()
  }
}