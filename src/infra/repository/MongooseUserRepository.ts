import { User, UserRepository } from 'src/domain/User';

export class MongooseUserRepository implements UserRepository {
  async save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

}