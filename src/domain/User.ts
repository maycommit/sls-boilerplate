export class User {
  private id: string;
  private username: string;
  private email: string;
  private createdAt: string;

  constructor(id: string, username: string, email: string, createdAt: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.createdAt = createdAt;
  }

  getId(): string {
    return this.id;
  }

  getUsername(): string {
    return this.username;
  }

  getEmail(): string {
    return this.email;
  }

  getCreatedAt(): string {
    return this.createdAt;
  }
}

export interface UserRepository {
  save(user: User): Promise<void>;
}