import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConteudosService } from './conteudos.service';
import { ConteudosDto } from './dto';

@Controller('conteudos')
export class ConteudosController {
  constructor(private conteudosService: ConteudosService) {}

  @Get()
  getContent() {
    return this.conteudosService.getContent();
  }

  @Post()
  createContent(@Body() dto: ConteudosDto) {
    return this.conteudosService.createContent(dto);
  }
}
