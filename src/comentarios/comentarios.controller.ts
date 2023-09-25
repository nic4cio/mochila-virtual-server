import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { GetUser } from 'src/auth/decorator';
import { ComentariosDto } from './dto';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('comentarios')
export class ComentariosController {
  constructor(private comentariosService: ComentariosService) {}

  @Get()
  getComments(@GetUser('id') userId: number) {
    return this.comentariosService.getComments(userId);
  }

  @Get(':id')
  getCommentById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) commentId: number,
  ) {
    return this.comentariosService.getCommentById(userId, commentId);
  }

  /*
  @Post()
  createComment(@GetUser('id') userId: number, @Body() dto: ComentariosDto) {
    return this.comentariosService.createComment(userId, dto);
  }
  */
}
