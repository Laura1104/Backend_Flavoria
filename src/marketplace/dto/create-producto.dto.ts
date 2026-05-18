import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  @Min(0)
  precio: number;

  @IsString()
  @IsNotEmpty()
  moneda: string;

  @IsString()
  @IsNotEmpty()
  vendedor: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @IsNumber()
  @Min(0)
  stock: number;
}