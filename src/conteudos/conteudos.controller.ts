import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConteudosService } from './conteudos.service';
import { ConteudosDto } from './dto';
import { GetUser } from 'src/auth/decorator';

@Controller('conteudos')
export class ConteudosController {
  constructor(private conteudosService: ConteudosService) {}

  @Get()
  getContent() {
    return this.conteudosService.getContent();
  }

  @Post()
  createContent(@GetUser('id') userId: number, @Body() dto: ConteudosDto) {
    return this.conteudosService.createContent(userId, dto);
  }
}
