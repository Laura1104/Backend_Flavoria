import { IsString, IsNotEmpty, IsNumber, Min, Max, IsIn } from 'class-validator';

export class CreateRecetaDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsString()
  @IsNotEmpty()
  pais: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  tiempo: string;

  @IsString()
  @IsIn(['Fácil', 'Media', 'Difícil'])
  dificultad: string;

  @IsString()
  @IsNotEmpty()
  imagen: string;

  @IsNumber()
  @Min(0)
  @Max(10000)
  likes: number;
}