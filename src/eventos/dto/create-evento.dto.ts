import { IsString, IsNotEmpty, IsNumber, Min, IsIn } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  hora: string;

  @IsString()
  @IsIn(['presencial', 'virtual'])
  tipo: 'presencial' | 'virtual';

  @IsString()
  @IsNotEmpty()
  lugar: string;

  @IsNumber()
  @Min(1)
  cupos: number;
}