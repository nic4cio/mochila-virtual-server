import { IsNotEmpty, IsString } from 'class-validator';

export class ComentariosDto {
  @IsString()
  @IsNotEmpty()
  texto: string;

  upvote: number;

  downvote: number;
}
