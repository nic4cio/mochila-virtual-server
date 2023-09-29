import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterAuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  curso: string;
}
