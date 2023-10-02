import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CuradorUserDto, EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: number, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { ...dto },
    });

    delete user.hash;

    return user;
  }

  async curadorUser(userId: number, dto: CuradorUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error('Erro');
    }

    // Atualize a coluna status do conteúdo
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role: 'CURADOR',
      },
    });
  }
}
