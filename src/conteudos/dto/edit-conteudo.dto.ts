import { IsIn, IsOptional, IsString  } from 'class-validator';

export class EditConteudoDto {
  @IsOptional()
  @IsString()
  status: string;
}
