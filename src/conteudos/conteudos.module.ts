import { Module } from '@nestjs/common';
import { ConteudosService } from './conteudos.service';
import { ConteudosController } from './conteudos.controller';

@Module({
  providers: [ConteudosService],
  controllers: [ConteudosController]
})
export class ConteudosModule {}
