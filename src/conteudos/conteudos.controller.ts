import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ConteudosService } from './conteudos.service';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CreateConteudoDto } from './dto';

@Controller('conteudos')
export class ConteudosController {
  constructor(private conteudosService: ConteudosService) {}

  @Get()
  getAllConteudos() {
    return this.conteudosService.getAllConteudos();
  }

  @UseGuards(JwtGuard)
  @Get('myConteudos')
  getConteudos(@GetUser('id') userId: number) {
    return this.conteudosService.getConteudos(userId);
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  getConteudoById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) conteudoId: number,
  ) {
    return this.conteudosService.getConteudoById(userId, conteudoId);
  }

  @UseGuards(JwtGuard)
  @Post()
  createConteudo(
    @GetUser('id') userId: number,
    @Body() dto: CreateConteudoDto,
  ) {
    return this.conteudosService.createConteudo(userId, dto);
  }
}
