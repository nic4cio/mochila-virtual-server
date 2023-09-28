import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateConteudoDto } from './dto';

@Injectable()
export class ConteudosService {
  constructor(private prisma: PrismaService) {}

  getAllConteudos() {
    return this.prisma.conteudo.findMany();
  }

  getConteudos(userId: number) {
    return this.prisma.conteudo.findMany({
      where: {
        userId,
      },
    });
  }

  getConteudoById(userId: number, conteudoId: number) {
    return this.prisma.comentario.findFirst({
      where: {
        id: conteudoId,
        userId,
      },
    });
  }

  async createConteudo(userId: number, dto: CreateConteudoDto) {
    const conteudo = await this.prisma.conteudo.create({
      data: {
        userId,
        ...dto,
      },
    });

    return conteudo;
  }

  async updateConteudo(userId: number, conteudoId: number, newStatus: string) {
    const conteudo = await this.prisma.conteudo.findFirst({
      where: {
        id: conteudoId,
        userId,
      },
    });

    if (!conteudo) {
      throw new Error('Erro');
    }

    // Atualize a coluna status do conteúdo
    const updatedConteudo = await this.prisma.conteudo.update({
      where: {
        id: conteudoId,
      },
      data: {
        status: newStatus,
      },
    });

    return updatedConteudo;
  }
}
