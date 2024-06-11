import { UserData } from 'src/domain/entities/user-data';

export interface IUserUseCases {
  findAll(): Promise<UserData[]>;
  create(user: UserData): Promise<UserData>;
  update(user: UserData): Promise<UserData>;
  delete(id: number): Promise<void>;
}
