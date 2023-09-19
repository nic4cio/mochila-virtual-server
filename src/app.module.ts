import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConteudosModule } from './conteudos/conteudos.module';
import { ComentariosController } from './comentarios/comentarios.controller';
import { ComentariosModule } from './comentarios/comentarios.module';
import { ComentariosService } from './comentarios/comentarios.service';

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
  ],
})
export class AppModule {}
