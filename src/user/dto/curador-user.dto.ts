import { IsOptional, IsString } from 'class-validator';

export class CuradorUserDto {
  @IsString()
  @IsOptional()
  role: string;
}