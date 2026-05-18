import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNutritionPlanDto } from './dto/create-nutrition-plan.dto';

export interface NutritionPlan {
  id: number;
  nombre: string;
  calorias: number;
  proteinas: string;
  carbohidratos: string;
  grasas: string;
  objetivo: string;
  duracion: string;
  creadoEn: string;
}

@Injectable()
export class NutritionPlanService {
  private plans: NutritionPlan[] = [
    {
      id: 1,
      nombre: 'Plan Pérdida de Peso',
      calorias: 1500,
      proteinas: '120g',
      carbohidratos: '150g',
      grasas: '50g',
      objetivo: 'Bajar de peso',
      duracion: '12 semanas',
      creadoEn: '2025-04-01',
    },
    {
      id: 2,
      nombre: 'Plan Ganancia Muscular',
      calorias: 3000,
      proteinas: '200g',
      carbohidratos: '350g',
      grasas: '80g',
      objetivo: 'Masa muscular',
      duracion: '16 semanas',
      creadoEn: '2025-04-10',
    },
    {
      id: 3,
      nombre: 'Plan Mantenimiento',
      calorias: 2000,
      proteinas: '150g',
      carbohidratos: '250g',
      grasas: '65g',
      objetivo: 'Mantener peso actual',
      duracion: '8 semanas',
      creadoEn: '2025-04-15',
    },
    {
      id: 4,
      nombre: 'Plan Vegano Alto Rendimiento',
      calorias: 2200,
      proteinas: '130g',
      carbohidratos: '300g',
      grasas: '60g',
      objetivo: 'Rendimiento deportivo sin proteína animal',
      duracion: '10 semanas',
      creadoEn: '2025-05-01',
    },
  ];

  private nextId = 5;

  findAll(): NutritionPlan[] {
    return this.plans;
  }

  findOne(id: number): NutritionPlan {
    const plan = this.plans.find((p) => p.id === id);
    if (!plan) throw new NotFoundException(`Plan con id ${id} no encontrado`);
    return plan;
  }

  create(dto: CreateNutritionPlanDto): NutritionPlan {
    const nuevo: NutritionPlan = {
      id: this.nextId++,
      ...dto,
      creadoEn: new Date().toISOString().split('T')[0],
    };
    this.plans.push(nuevo);
    return nuevo;
  }
}