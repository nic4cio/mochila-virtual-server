import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

import { ConteudosModule } from './conteudos/conteudos.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { ContentRatingModule } from './content-rating/content-rating.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    ConteudosModule,
    ComentariosModule,
    ContentRatingModule,
  ],
})
export class AppModule {}
