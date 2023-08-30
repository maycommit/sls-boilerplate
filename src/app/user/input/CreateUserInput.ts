import Joi from 'joi'
import { User } from "src/domain/User";

export class CreateUserInput {
  private username: string;
  private email: string;

  constructor(input: any) {
    const validator = Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email().required(),
    })

    const res = validator.validate(input)
    if (res.error) {
      throw new Error(res.error.message)
    }
    
    this.username = res.value.username
    this.email = res.value.email
  }

  toUser(): User {
    return new User(
      "1",
      this.username,
      this.email,
      "now",
    );
  }
}