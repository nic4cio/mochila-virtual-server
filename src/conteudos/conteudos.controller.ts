import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  Patch,
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

  @UseGuards(JwtGuard)
  @Patch(':id') // Use o decorator Patch e especifique o parâmetro ':id'
  updateConteudo(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) conteudoId: number,
    @Body('status') newStatus: string, // Use 'Partial' para permitir atualizações parciais
  ) {
    return this.conteudosService.updateConteudo(userId, conteudoId, newStatus);
  }

}
