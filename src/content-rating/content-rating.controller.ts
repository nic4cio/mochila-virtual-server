import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ContentRatingService } from './content-rating.service';
import { JwtGuard } from '../../src/auth/guard';
import { GetUser } from '../../src/auth/decorator';

@Controller('content-rating')
export class ContentRatingController {
  constructor(private readonly contentRatingService: ContentRatingService) {}

  @UseGuards(JwtGuard)
  @Post('upvote/:conteudoId')
  async upvoteContent(
    @GetUser('id') userId: number,
    @Param('conteudoId') conteudoId: string,
  ) {
    return this.contentRatingService.upvoteContent(
      userId,
      parseInt(conteudoId),
    );
  }

  @UseGuards(JwtGuard)
  @Post('downvote/:conteudoId')
  async downvoteContent(
    @GetUser('id') userId: number,
    @Param('conteudoId') conteudoId: string,
  ) {
    return this.contentRatingService.downvoteContent(
      userId,
      parseInt(conteudoId),
    );
  }

  @Get(':conteudoId/votes')
  async getContentVotes(@Param('conteudoId') conteudoId: string) {
    const votes = await this.contentRatingService.getContentVotes(
      parseInt(conteudoId),
    );
    return votes;
  }
}
