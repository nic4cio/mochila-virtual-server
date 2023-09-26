import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConteudosDto } from './dto';

@Injectable()
export class ConteudosService {
  constructor(private prisma: PrismaService) {}

  async getContent(dto: ConteudosDto) {
    const response = await this.prisma.conteudo.findMany({
      where: {
        materia: dto.materia,
      },
    });

    return response;
  }

  async createContent(userId: number, dto: ConteudosDto) {
    const content = await this.prisma.conteudo.create({
      data: {
        userId,
        ...dto,
      },
    });

    return content;
  }
}
