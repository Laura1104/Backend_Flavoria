import { IsString, IsNumber, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateNutritionPlanDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  @Min(800)
  @Max(6000)
  calorias: number;

  @IsString()
  @IsNotEmpty()
  proteinas: string;

  @IsString()
  @IsNotEmpty()
  carbohidratos: string;

  @IsString()
  @IsNotEmpty()
  grasas: string;

  @IsString()
  @IsNotEmpty()
  objetivo: string;

  @IsString()
  @IsNotEmpty()
  duracion: string;
}