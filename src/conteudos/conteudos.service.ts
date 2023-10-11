import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateConteudoDto, EditConteudoDto } from './dto';

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

  async updateConteudo(
    userId: number,
    conteudoId: number,
    dto: EditConteudoDto,
  ) {
    const conteudo = await this.prisma.conteudo.findUnique({
      where: {
        id: conteudoId,
      },
    });

    if (!conteudo) {
      throw new Error('Erro');
    }

    // Atualize a coluna status do conteúdo
    return this.prisma.conteudo.update({
      where: {
        id: conteudoId,
      },
      data: {
        status: 'APROVADO',
      },
    });
  }

  async recusarConteudo(
    userId: number,
    conteudoId: number,
    dto: EditConteudoDto,
  ) {
    const conteudo = await this.prisma.conteudo.findUnique({
      where: {
        id: conteudoId,
      },
    });

    if (!conteudo) {
      throw new Error('Erro');
    }

    // Atualize a coluna status do conteúdo
    return this.prisma.conteudo.update({
      where: {
        id: conteudoId,
      },
      data: {
        status: 'RECUSADO',
      },
    });
  }
}
