import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ComentariosDto } from './dto';

@Injectable()
export class ComentariosService {
  constructor(private prisma: PrismaService) {}

  getCommentById(userId: number, commentId: number) {
    return this.prisma.comentario.findFirst({
      where: {
        id: commentId,
        userId,
      },
    });
  }

  async createComment(userId: number, dto: ComentariosDto) {
    const comment = await this.prisma.comentario.create({
      data: {
        userId,
        ...dto,
      },
    });

    return comment;
  }
}
