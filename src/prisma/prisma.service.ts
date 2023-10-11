import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get<string>('DATABASE_URL'),
        },
      },
    });
    console.log(config.get<string>('DATABASE_URL'));
  }

  cleanDb() {
    return this.$transaction([
      this.bookmark.deleteMany(),
      this.comentario.deleteMany(),
      this.conteudo.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
}
