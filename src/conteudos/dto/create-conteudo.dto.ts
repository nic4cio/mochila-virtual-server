import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateConteudoDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  materia: string;

  @IsString()
  @IsNotEmpty()
  assunto: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsString()
  @IsNotEmpty()
  pdf: string;
}
