import { Injectable } from '@nestjs/common';
import { GetUserUseCase } from 'src/application/user/use-cases/IUserUseCases';

@Injectable()
export class UserService {
  constructor(private readonly getUserUseCase: GetUserUseCase) {}

  async getUser() {
    return await this.getUserUseCase.execute();
  }
}
