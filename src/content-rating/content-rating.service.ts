import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EnumVoteType } from '@prisma/client'; // Importe EnumVoteType do Prisma

@Injectable()
export class ContentRatingService {
  constructor(private readonly prisma: PrismaService) {}

  async toggleVote(userId: number, conteudoId: number, voteType: EnumVoteType) {
    // Verificar se o usuário já votou neste conteúdo
    const existingVote = await this.prisma.contentRating.findFirst({
      where: {
        userId,
        conteudoId,
      },
    });

    if (existingVote) {
      if (existingVote.voteType === voteType) {
        // Se o usuário clicou novamente no mesmo voto, remova o voto
        await this.prisma.contentRating.delete({
          where: { id: existingVote.id },
        });
        return { message: 'Seu voto foi removido.' };
      } else {
        // Se o usuário votou no tipo oposto, atualize o voto
        await this.prisma.contentRating.update({
          where: { id: existingVote.id },
          data: { voteType },
        });
        return { message: `Seu voto foi atualizado para ${voteType}.` };
      }
    } else {
      // Caso contrário, crie um novo voto
      await this.prisma.contentRating.create({
        data: {
          userId,
          conteudoId,
          voteType,
        },
      });
      return { message: `Você votou em ${voteType}.` };
    }
  }

  async upvoteContent(userId: number, conteudoId: number) {
    return this.toggleVote(userId, conteudoId, EnumVoteType.UPVOTE);
  }

  async downvoteContent(userId: number, conteudoId: number) {
    return this.toggleVote(userId, conteudoId, EnumVoteType.DOWNVOTE);
  }

  async getContentVotes(conteudoId: number) {
    const upvotesCount = await this.prisma.contentRating.count({
      where: {
        conteudoId,
        voteType: 'UPVOTE', // Suponha que 'UPVOTE' seja um valor do enum
      },
    });

    const downvotesCount = await this.prisma.contentRating.count({
      where: {
        conteudoId,
        voteType: 'DOWNVOTE', // Suponha que 'DOWNVOTE' seja um valor do enum
      },
    });

    return {
      upvotes: upvotesCount,
      downvotes: downvotesCount,
    };
  }
}
