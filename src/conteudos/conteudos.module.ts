import { Module } from '@nestjs/common';
import { ConteudosController } from './conteudos.controller';
import { ConteudosService } from './conteudos.service';

@Module({
  controllers: [ConteudosController],
  providers: [ConteudosService],
})
export class ConteudosModule {}
