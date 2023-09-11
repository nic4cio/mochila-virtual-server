import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConteudosDto } from './dto';

@Injectable()
export class ConteudosService {
  constructor(private prisma: PrismaService) {}

  async getContent() {
    const response = await this.prisma.conteudo.findMany();
    return response;
  }

  async createContent(dto: ConteudosDto) {
    const content = await this.prisma.conteudo.create({
      data: {
        ...dto,
      },
    });

    return content;
  }
}
