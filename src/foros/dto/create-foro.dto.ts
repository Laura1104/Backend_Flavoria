import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateForoDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsBoolean()
  @IsOptional()
  pinned?: boolean;
}