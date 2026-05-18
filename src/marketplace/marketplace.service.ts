import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  moneda: string;
  vendedor: string;
  categoria: string;
  rating: number;
  stock: number;
  creadoEn: string;
}

@Injectable()
export class MarketplaceService {
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Proteína Whey Chocolate 2kg',
      precio: 65000,
      moneda: 'COP',
      vendedor: 'NutriShop Colombia',
      categoria: 'Suplementos',
      rating: 4.8,
      stock: 42,
      creadoEn: '2025-03-01',
    },
    {
      id: 2,
      nombre: 'Aceite de Oliva Extra Virgen 500ml',
      precio: 28000,
      moneda: 'COP',
      vendedor: 'OlivaVerde',
      categoria: 'Aceites',
      rating: 4.6,
      stock: 120,
      creadoEn: '2025-03-15',
    },
    {
      id: 3,
      nombre: 'Spirulina Orgánica 200g',
      precio: 45000,
      moneda: 'COP',
      vendedor: 'VerdeSalud',
      categoria: 'Superfoods',
      rating: 4.5,
      stock: 30,
      creadoEn: '2025-04-02',
    },
    {
      id: 4,
      nombre: 'Matcha Premium Ceremonial 100g',
      precio: 72000,
      moneda: 'COP',
      vendedor: 'TéImperial',
      categoria: 'Bebidas',
      rating: 4.9,
      stock: 15,
      creadoEn: '2025-04-20',
    },
    {
      id: 5,
      nombre: 'Colágeno Hidrolizado Natural 300g',
      precio: 55000,
      moneda: 'COP',
      vendedor: 'NutriShop Colombia',
      categoria: 'Suplementos',
      rating: 4.7,
      stock: 58,
      creadoEn: '2025-05-05',
    },
  ];

  private nextId = 6;

  findAll(): Producto[] {
    return this.productos;
  }

  findOne(id: number): Producto {
    const producto = this.productos.find((p) => p.id === id);
    if (!producto) throw new NotFoundException(`Producto con id ${id} no encontrado`);
    return producto;
  }

  create(dto: CreateProductoDto): Producto {
    const nuevo: Producto = {
      id: this.nextId++,
      ...dto,
      creadoEn: new Date().toISOString().split('T')[0],
    };
    this.productos.push(nuevo);
    return nuevo;
  }
}