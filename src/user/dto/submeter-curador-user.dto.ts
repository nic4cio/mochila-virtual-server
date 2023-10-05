import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class SubmeterCuradorDto {
  @IsString()
  @IsOptional()
  role: string;

  @IsString()
  @IsOptional()
  motivoCurador: string;

  @IsString()
  @IsNotEmpty()
  historico: string;
}
