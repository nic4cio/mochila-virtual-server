import { IsNotEmpty, IsString } from 'class-validator';

export class ComentariosDto {
  @IsString()
  @IsNotEmpty()
  texto: string;
}
