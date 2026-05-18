import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';

export interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  hora: string;
  tipo: 'presencial' | 'virtual';
  lugar: string;
  cupos: number;
  inscritos: number;
  creadoEn: string;
}

@Injectable()
export class EventosService {
  private eventos: Evento[] = [
    {
      id: 1,
      titulo: 'Taller de Cocina Saludable',
      descripcion: 'Aprende a preparar 5 comidas balanceadas para toda la semana en menos de 2 horas.',
      fecha: '2025-06-05',
      hora: '10:00 AM',
      tipo: 'presencial',
      lugar: 'Centro Culinario Bogotá',
      cupos: 30,
      inscritos: 22,
      creadoEn: '2025-05-01',
    },
    {
      id: 2,
      titulo: 'Webinar: Nutrición en el deporte de alto rendimiento',
      descripcion: 'Conferencia con especialistas en nutrición deportiva. Q&A al final.',
      fecha: '2025-06-12',
      hora: '07:00 PM',
      tipo: 'virtual',
      lugar: 'Zoom',
      cupos: 200,
      inscritos: 134,
      creadoEn: '2025-05-05',
    },
    {
      id: 3,
      titulo: 'Reto 21 días sin azúcar',
      descripcion: 'Únete al reto comunitario de Flavoriaaa y transforma tus hábitos alimenticios.',
      fecha: '2025-06-01',
      hora: '12:00 AM',
      tipo: 'virtual',
      lugar: 'App Flavoriaaa',
      cupos: 500,
      inscritos: 387,
      creadoEn: '2025-05-10',
    },
    {
      id: 4,
      titulo: 'Feria de Productos Orgánicos',
      descripcion: 'Más de 40 vendedores de productos orgánicos y naturales en un solo lugar.',
      fecha: '2025-06-20',
      hora: '09:00 AM',
      tipo: 'presencial',
      lugar: 'Parque El Virrey, Bogotá',
      cupos: 1000,
      inscritos: 210,
      creadoEn: '2025-05-12',
    },
  ];

  private nextId = 5;

  findAll(): Evento[] {
    return this.eventos;
  }

  findOne(id: number): Evento {
    const evento = this.eventos.find((e) => e.id === id);
    if (!evento) throw new NotFoundException(`Evento con id ${id} no encontrado`);
    return evento;
  }

  create(dto: CreateEventoDto): Evento {
    const nuevo: Evento = {
      id: this.nextId++,
      ...dto,
      inscritos: 0,
      creadoEn: new Date().toISOString().split('T')[0],
    };
    this.eventos.push(nuevo);
    return nuevo;
  }
}