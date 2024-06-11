import { UserData } from '../entities/user-data';

export interface IUserRepository {
  findAll(): Promise<UserData[]>;
  create(user: UserData): Promise<UserData>;
  update(user: UserData): Promise<UserData>;
  delete(id: number): Promise<void>;
}
