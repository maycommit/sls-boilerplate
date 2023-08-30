import { User } from "src/domain/User";

export class UserOutput {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly createdAt: string,
  ) {}

  static fromUser(user: User): UserOutput {
    return new UserOutput(
      user.getId(),
      user.getUsername(),
      user.getEmail(),
      user.getCreatedAt()
    );
  }
}