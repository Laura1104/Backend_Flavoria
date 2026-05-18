import { Injectable, NotFoundException } from '@nestjs/common';

export interface Receta {
  id: number;
  titulo: string;
  autor: string;
  pais: string;
  categoria: string;
  tiempo: string;
  dificultad: string;
  imagen: string;
  likes: number;
  creadoEn: string;
}

@Injectable()
export class RecetasService {
  private recetas: Receta[] = [
    {
      id: 1,
      titulo: 'Ensalada Mediterránea',
      autor: 'Laura1104',
      pais: 'España',
      categoria: 'Ensaladas',
      tiempo: '15 min',
      dificultad: 'Fácil',
      imagen: '/images/ensalada-mediterranea.jpg',
      likes: 234,
      creadoEn: '2025-03-10',
    },
    {
      id: 2,
      titulo: 'Pollo Tikka Masala',
      autor: 'Samu9o',
      pais: 'India',
      categoria: 'Platos principales',
      tiempo: '45 min',
      dificultad: 'Media',
      imagen: '/images/tikka-masala.jpg',
      likes: 412,
      creadoEn: '2025-03-22',
    },
    {
      id: 3,
      titulo: 'Tacos de Camarones',
      autor: 'ChefMarcela',
      pais: 'México',
      categoria: 'Tacos',
      tiempo: '30 min',
      dificultad: 'Media',
      imagen: '/images/tacos-camarones.jpg',
      likes: 318,
      creadoEn: '2025-04-05',
    },
    {
      id: 4,
      titulo: 'Bowl de Açaí',
      autor: 'NutriDiana',
      pais: 'Brasil',
      categoria: 'Desayunos',
      tiempo: '10 min',
      dificultad: 'Fácil',
      imagen: '/images/acai-bowl.jpg',
      likes: 567,
      creadoEn: '2025-04-18',
    },
    {
      id: 5,
      titulo: 'Ramen Casero',
      autor: 'Samu9o',
      pais: 'Japón',
      categoria: 'Sopas',
      tiempo: '90 min',
      dificultad: 'Difícil',
      imagen: '/images/ramen.jpg',
      likes: 489,
      creadoEn: '2025-05-02',
    },
  ];

  private nextId = 6;

  findAll(): Receta[] {
    return this.recetas;
  }

  findOne(id: number): Receta {
    const receta = this.recetas.find((r) => r.id === id);
    if (!receta) throw new NotFoundException(`Receta con id ${id} no encontrada`);
    return receta;
  }

  create(dto: Record<string, any>): Receta {
    const nueva: Receta = {
      id: this.nextId++,
      titulo: String(dto.titulo || 'Nueva Receta'),
      autor: String(dto.autor || 'Anónimo'),
      pais: String(dto.pais || 'Desconocido'),
      categoria: String(dto.categoria || 'General'),
      tiempo: String(dto.tiempo || '20 min'),
      dificultad: String(dto.dificultad || 'Fácil'),
      imagen: String(dto.imagen || '/images/default.jpg'),
      likes: Number(dto.likes || 0),
      creadoEn: new Date().toISOString().split('T')[0],
    };
    this.recetas.push(nueva);
    return nueva;
  }

  update(id: number, updateRecetaDto: Record<string, any>) {
    const recetaIndex = this.recetas.findIndex((r) => r.id === id);
    if (recetaIndex === -1) throw new NotFoundException(`Receta con id ${id} no encontrada`);
    
    const recetaActual = this.recetas[recetaIndex];
    this.recetas[recetaIndex] = {
      id: recetaActual.id,
      titulo: String(updateRecetaDto.titulo !== undefined ? updateRecetaDto.titulo : recetaActual.titulo),
      autor: String(updateRecetaDto.autor !== undefined ? updateRecetaDto.autor : recetaActual.autor),
      pais: String(updateRecetaDto.pais !== undefined ? updateRecetaDto.pais : recetaActual.pais),
      categoria: String(updateRecetaDto.categoria !== undefined ? updateRecetaDto.categoria : recetaActual.categoria),
      tiempo: String(updateRecetaDto.tiempo !== undefined ? updateRecetaDto.tiempo : recetaActual.tiempo),
      dificultad: String(updateRecetaDto.dificultad !== undefined ? updateRecetaDto.dificultad : recetaActual.dificultad),
      imagen: String(updateRecetaDto.imagen !== undefined ? updateRecetaDto.imagen : recetaActual.imagen),
      likes: Number(updateRecetaDto.likes !== undefined ? updateRecetaDto.likes : recetaActual.likes),
      creadoEn: recetaActual.creadoEn,
    };
    return this.recetas[recetaIndex];
  }

  remove(id: number) {
    const recetaIndex = this.recetas.findIndex((r) => r.id === id);
    if (recetaIndex === -1) throw new NotFoundException(`Receta con id ${id} no encontrada`);
    
    this.recetas.splice(recetaIndex, 1);
    return { message: `Receta con id ${id} eliminada correctamente` };
  }
}