import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ComentariosDto {
  @IsString()
  @IsNotEmpty()
  texto: string;

  @IsNumber()
  @IsOptional()
  upvote?: number;

  @IsNumber()
  @IsOptional()
  downvote?: number;
}
