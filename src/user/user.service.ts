import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CuradorUserDto, EditUserDto, SerCuradorUserDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: number, dto: EditUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (dto.firstName != null && dto.password == null) {
      return await this.prisma.user.update({
        where: { id: userId },
        data: { firstName: dto.firstName },
      });
    } else if (dto.firstName == null && dto.password != null) {
      delete user.hash;
      const hash = await argon.hash(dto.password);
      return await this.prisma.user.update({
        where: { id: userId },
        data: { hash },
      });
    } else if (dto.firstName != null && dto.password != null) {
      delete user.hash;
      const hash = await argon.hash(dto.password);
      return await this.prisma.user.update({
        where: { id: userId },
        data: { firstName: dto.firstName, hash },
      });
    } else {
      return user;
    }
  }

  getAllUsers() {
    return this.prisma.user.findMany();
  }

  async submeterCuradorDto(
    userId: number,
    motivoCurador: string,
    historico: string,
  ) {
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
        role: 'ANALISE',
        motivoCurador: motivoCurador,
        historico: historico,
      },
    });
  }

  async serCuradorUser(userId: number, matCurador: string[], userId2: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId2,
      },
    });

    if (!user) {
      throw new Error('Erro');
    }

    // Atualize a coluna status do conteúdo
    return this.prisma.user.update({
      where: {
        id: userId2,
      },
      data: {
        role: 'CURADOR',
        matCurador: matCurador,
      },
    });
  }
}
