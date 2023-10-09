import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { ComentariosDto } from './dto';

@Injectable()
export class ComentariosService {
  constructor(private prisma: PrismaService) {}

  getComments(userId: number) {
    return this.prisma.comentario.findMany({
      where: {
        userId,
      },
    });
  }

  getCommentById(userId: number, commentId: number) {
    return this.prisma.comentario.findFirst({
      where: {
        id: commentId,
        userId,
      },
    });
  }

  async createComment(userId: number, conteudoId: number, dto: ComentariosDto) {
    const comentario = await this.prisma.comentario.create({
      data: {
        userId,
        conteudoId,
        ...dto,
      },
    });

    return comentario;
  }

  //Get all comentarios associated with a conteudoId
  getCommentsByConteudoId(conteudoId: number) {
    return this.prisma.comentario.findMany({
      where: {
        conteudoId,
      },
    });
  }
}
