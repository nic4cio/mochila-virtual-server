import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ComentariosDto {
  @IsString()
  @IsNotEmpty()
  texto: string;

  @IsNumber()
  @IsNotEmpty()
  upvote: number;

  @IsNumber()
  @IsNotEmpty()
  downvote: number;
}
