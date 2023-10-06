import { IsArray, IsOptional, IsString } from 'class-validator';

export class SerCuradorUserDto {
  @IsOptional()
  id: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  matCurador?: string[]; // Use '?' para tornar a propriedade opcional

  @IsString()
  @IsOptional()
  role?: string; // Use '?' para tornar a propriedade opcional
}
