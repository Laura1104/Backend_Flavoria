import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateForoDto } from './dto/create-foro.dto';

export interface Foro {
  id: number;
  titulo: string;
  autor: string;
  categoria: string;
  respuestas: number;
  vistas: number;
  fechaCreacion: string;
  pinned: boolean;
}

@Injectable()
export class ForosService {
  private foros: Foro[] = [
    {
      id: 1,
      titulo: '¿Cuál es el mejor snack pre-entreno?',
      autor: 'FitnessCarlos',
      categoria: 'Nutrición deportiva',
      respuestas: 47,
      vistas: 1230,
      fechaCreacion: '2025-05-10',
      pinned: true,
    },
    {
      id: 2,
      titulo: 'Recetas veganas altas en proteína',
      autor: 'Laura1104',
      categoria: 'Veganismo',
      respuestas: 32,
      vistas: 890,
      fechaCreacion: '2025-05-12',
      pinned: false,
    },
    {
      id: 3,
      titulo: 'Intermittent fasting: experiencias reales',
      autor: 'Samu9o',
      categoria: 'Dietas',
      respuestas: 98,
      vistas: 3450,
      fechaCreacion: '2025-05-08',
      pinned: true,
    },
    {
      id: 4,
      titulo: 'Suplementos para mejorar el sueño',
      autor: 'DraBienestar',
      categoria: 'Salud general',
      respuestas: 21,
      vistas: 670,
      fechaCreacion: '2025-05-15',
      pinned: false,
    },
    {
      id: 5,
      titulo: 'Guía para leer etiquetas nutricionales',
      autor: 'NutriDiana',
      categoria: 'Educación nutricional',
      respuestas: 63,
      vistas: 2100,
      fechaCreacion: '2025-05-03',
      pinned: false,
    },
  ];

  private nextId = 6;

  findAll(): Foro[] {
    return this.foros;
  }

  findOne(id: number): Foro {
    const foro = this.foros.find((f) => f.id === id);
    if (!foro) throw new NotFoundException(`Foro con id ${id} no encontrado`);
    return foro;
  }

  create(dto: CreateForoDto): Foro {
    const nuevo: Foro = {
      id: this.nextId++,
      titulo: dto.titulo,
      autor: dto.autor,
      categoria: dto.categoria,
      respuestas: 0,
      vistas: 0,
      fechaCreacion: new Date().toISOString().split('T')[0],
      pinned: dto.pinned ?? false,
    };
    this.foros.push(nuevo);
    return nuevo;
  }
}