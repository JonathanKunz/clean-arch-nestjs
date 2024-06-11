import { PrismaService } from '../prisma/prisma.service';
import { UserData } from '../../../domain/entities/user-data';
import { IUserRepository } from 'src/domain/repositories/user-repository';

export class PrismaUserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserData[]> {
    return this.prisma.user.findMany();
  }

  async create(user: UserData): Promise<UserData> {
    return this.prisma.user.create({ data: user });
  }

  async update(user: UserData): Promise<UserData> {
    return this.prisma.user.update({ where: { id: user.id }, data: user });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
