import { Injectable } from '@nestjs/common';

export interface ProductoMenu {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagen?: string;
}

export interface Restaurante {
  id: string;
  nombre: string;
  localidad: string;
  descripcion: string;
  imagen: string;
  calificacion: number;
  tiempoEntrega: string;
  categorias: string[];
  menu: ProductoMenu[];
  direccion: string;
  telefono: string;
}

const RESTAURANTES_BOGOTA: Restaurante[] = [
  {
    id: '1',
    nombre: 'La Pepita Burger Bar',
    localidad: 'Chapinero',
    descripcion: 'La mejor hamburguesería artesanal de Bogotá, con ingredientes frescos y pan brioche horneado a diario.',
    imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    calificacion: 4.8,
    tiempoEntrega: '25-35 min',
    categorias: ['Hamburguesas', 'Papas', 'Bebidas'],
    direccion: 'Cra 7 # 69-11, Chapinero',
    telefono: '+57 1 310 5678',
    menu: [
      { id: 'p1-1', nombre: 'Pepita Clásica', descripcion: 'Carne angus, lechuga, tomate, cebolla caramelizada', precio: 28000, categoria: 'Hamburguesas' },
      { id: 'p1-2', nombre: 'Pepita Doble', descripcion: 'Doble carne, queso cheddar, bacon, salsa especial', precio: 36000, categoria: 'Hamburguesas' },
      { id: 'p1-3', nombre: 'Veggie Pepita', descripcion: 'Medallón de garbanzo, aguacate, tomate, rúgula', precio: 26000, categoria: 'Hamburguesas' },
      { id: 'p1-4', nombre: 'Papas Rústicas', descripcion: 'Papas en gajos con sal marina y romero', precio: 12000, categoria: 'Papas' },
      { id: 'p1-5', nombre: 'Limonada de Coco', descripcion: 'Limonada natural con leche de coco', precio: 9000, categoria: 'Bebidas' },
    ],
  },
  {
    id: '2',
    nombre: 'Andrés Carne de Res DC',
    localidad: 'Zona Rosa',
    descripcion: 'El restaurante más famoso de Colombia, experiencia gastronómica única con la mejor carne a la parrilla.',
    imagen: 'https://images.unsplash.com/photo-1544025162-d76preacherd?w=800&q=80',
    calificacion: 4.9,
    tiempoEntrega: '40-55 min',
    categorias: ['Parrilla', 'Cocteles', 'Entradas', 'Postres'],
    direccion: 'Cra 12 # 83-33, Zona Rosa',
    telefono: '+57 1 863 7880',
    menu: [
      { id: 'p2-1', nombre: 'Churrasco Andrés', descripcion: 'Churrasco 400g a la brasa con papas y ensalada', precio: 68000, categoria: 'Parrilla' },
      { id: 'p2-2', nombre: 'Costilla BBQ', descripcion: 'Costilla de res con salsa BBQ casera', precio: 72000, categoria: 'Parrilla' },
      { id: 'p2-3', nombre: 'Picada Colombiana', descripcion: 'Surtido de chicharrón, chorizo, morcilla y arepa', precio: 45000, categoria: 'Entradas' },
      { id: 'p2-4', nombre: 'Mojito de Maracuyá', descripcion: 'Ron, maracuyá, menta y soda', precio: 22000, categoria: 'Cocteles' },
      { id: 'p2-5', nombre: 'Tres Leches', descripcion: 'Postre tradicional con dulce de leche', precio: 18000, categoria: 'Postres' },
    ],
  },
  {
    id: '3',
    nombre: 'Harry Sasson',
    localidad: 'Chicó',
    descripcion: 'Alta cocina internacional del chef Harry Sasson, referente de la gastronomía bogotana por más de 25 años.',
    imagen: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    calificacion: 4.9,
    tiempoEntrega: '45-60 min',
    categorias: ['Alta Cocina', 'Mariscos', 'Carnes', 'Vinos'],
    direccion: 'Cra 9 # 75-70, Chicó',
    telefono: '+57 1 347 2700',
    menu: [
      { id: 'p3-1', nombre: 'Langostinos al Ajillo', descripcion: 'Langostinos gigantes en mantequilla de ajo y vino blanco', precio: 85000, categoria: 'Mariscos' },
      { id: 'p3-2', nombre: 'Lomo Fino Sasson', descripcion: 'Lomo fino 250g con reducción de vino tinto', precio: 95000, categoria: 'Carnes' },
      { id: 'p3-3', nombre: 'Ceviche de Pargo', descripcion: 'Pargo rojo, limón, cilantro, ají amarillo', precio: 52000, categoria: 'Mariscos' },
      { id: 'p3-4', nombre: 'Copa Malbec Achaval', descripcion: 'Vino argentino premium por copa', precio: 28000, categoria: 'Vinos' },
    ],
  },
  {
    id: '4',
    nombre: 'Masa',
    localidad: 'Usaquén',
    descripcion: 'Panadería y restaurante artesanal, famoso por su sourdough y brunch de fin de semana.',
    imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    calificacion: 4.7,
    tiempoEntrega: '20-30 min',
    categorias: ['Panadería', 'Brunch', 'Café', 'Ensaladas'],
    direccion: 'Cra 6 # 119B-52, Usaquén',
    telefono: '+57 1 213 8085',
    menu: [
      { id: 'p4-1', nombre: 'Huevos Benedictinos', descripcion: 'Huevos escalfados sobre pan de masa madre, salsa holandesa', precio: 32000, categoria: 'Brunch' },
      { id: 'p4-2', nombre: 'Sourdough Artesanal', descripcion: 'Pan de masa madre entero horneado al día', precio: 18000, categoria: 'Panadería' },
      { id: 'p4-3', nombre: 'Avocado Toast', descripcion: 'Pan de masa madre, aguacate, huevo pochado, tomate cherry', precio: 28000, categoria: 'Brunch' },
      { id: 'p4-4', nombre: 'Flat White', descripcion: 'Espresso doble con leche vaporizada', precio: 9500, categoria: 'Café' },
      { id: 'p4-5', nombre: 'Bowl Verde', descripcion: 'Quinoa, espinaca, aguacate, pepino, limón', precio: 24000, categoria: 'Ensaladas' },
    ],
  },
  {
    id: '5',
    nombre: 'Mini-Mal',
    localidad: 'La Macarena',
    descripcion: 'Cocina de autor con ingredientes de mercados locales colombianos, menú que cambia según temporada.',
    imagen: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    calificacion: 4.8,
    tiempoEntrega: '35-50 min',
    categorias: ['Cocina de Autor', 'Cocteles', 'Postres'],
    direccion: 'Cra 4A # 27-17, La Macarena',
    telefono: '+57 1 281 9491',
    menu: [
      { id: 'p5-1', nombre: 'Trucha del Huila', descripcion: 'Trucha arco iris, puré de papa criolla, hierbas del jardín', precio: 58000, categoria: 'Cocina de Autor' },
      { id: 'p5-2', nombre: 'Ají de Gallina Colombiano', descripcion: 'Reinterpretación con gallina criolla y ajíes del Putumayo', precio: 48000, categoria: 'Cocina de Autor' },
      { id: 'p5-3', nombre: 'Sorbete de Lulo', descripcion: 'Sorbete artesanal de lulo con menta', precio: 16000, categoria: 'Postres' },
      { id: 'p5-4', nombre: 'Coctel de Guanábana', descripcion: 'Ron artesanal, guanábana, jengibre, lima', precio: 24000, categoria: 'Cocteles' },
    ],
  },
  {
    id: '6',
    nombre: 'Misia',
    localidad: 'Parque 93',
    descripcion: 'La cocina tradicional colombiana reimaginada por Leo Espinosa, embajadora de la gastronomía nacional.',
    imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    calificacion: 4.9,
    tiempoEntrega: '35-45 min',
    categorias: ['Colombiana', 'Sopas', 'Platos Típicos', 'Postres'],
    direccion: 'Cra 15 # 93-52, Parque 93',
    telefono: '+57 1 756 2299',
    menu: [
      { id: 'p6-1', nombre: 'Ajiaco Bogotano', descripcion: 'Sopa tradicional con papa criolla, pollo, guascas', precio: 38000, categoria: 'Sopas' },
      { id: 'p6-2', nombre: 'Bandeja Paisa Misia', descripcion: 'Frijoles, arroz, chicharrón, huevo, chorizo, arepa', precio: 48000, categoria: 'Platos Típicos' },
      { id: 'p6-3', nombre: 'Cazuela de Mariscos', descripcion: 'Mariscos del Pacífico en caldo de coco y ají', precio: 62000, categoria: 'Platos Típicos' },
      { id: 'p6-4', nombre: 'Postre de Natas', descripcion: 'Postre tradicional boyacense con arequipe', precio: 18000, categoria: 'Postres' },
    ],
  },
  {
    id: '7',
    nombre: 'Quinoa Restaurante',
    localidad: 'Teusaquillo',
    descripcion: 'Restaurante 100% vegano y orgánico, comprometido con la sostenibilidad y productos locales.',
    imagen: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    calificacion: 4.6,
    tiempoEntrega: '20-30 min',
    categorias: ['Vegano', 'Orgánico', 'Jugos', 'Bowls'],
    direccion: 'Cra 24 # 39-21, Teusaquillo',
    telefono: '+57 300 456 7890',
    menu: [
      { id: 'p7-1', nombre: 'Buddha Bowl', descripcion: 'Quinoa, garbanzos, kale, zanahoria, tahini', precio: 28000, categoria: 'Bowls' },
      { id: 'p7-2', nombre: 'Wrap de Falafel', descripcion: 'Falafel casero, hummus, lechuga, tomate, pepino', precio: 24000, categoria: 'Vegano' },
      { id: 'p7-3', nombre: 'Jugo Verde Detox', descripcion: 'Espinaca, manzana verde, apio, jengibre, limón', precio: 12000, categoria: 'Jugos' },
      { id: 'p7-4', nombre: 'Tiramisú Vegano', descripcion: 'Tiramisú sin lácteos con crema de anacardo', precio: 16000, categoria: 'Vegano' },
    ],
  },
  {
    id: '8',
    nombre: 'La Hamburguesería',
    localidad: 'Palermo',
    descripcion: 'Pioneros de la hamburguesa gourmet en Bogotá desde 2010, con más de 20 opciones en carta.',
    imagen: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80',
    calificacion: 4.5,
    tiempoEntrega: '25-40 min',
    categorias: ['Hamburguesas', 'Hot Dogs', 'Papas', 'Malteadas'],
    direccion: 'Cra 22 # 85-38, Palermo',
    telefono: '+57 1 256 3412',
    menu: [
      { id: 'p8-1', nombre: 'La Clásica', descripcion: 'Carne 180g, queso americano, lechuga, tomate, mayonesa', precio: 22000, categoria: 'Hamburguesas' },
      { id: 'p8-2', nombre: 'La BBQ Especial', descripcion: 'Doble carne, bacon, queso cheddar, cebolla crispy, BBQ', precio: 34000, categoria: 'Hamburguesas' },
      { id: 'p8-3', nombre: 'Hot Dog Neoyorquino', descripcion: 'Salchicha premium, mostaza, chucrut, cebolla', precio: 18000, categoria: 'Hot Dogs' },
      { id: 'p8-4', nombre: 'Papas con Queso', descripcion: 'Papas fritas bañadas en queso cheddar fundido', precio: 14000, categoria: 'Papas' },
      { id: 'p8-5', nombre: 'Malteada de Oreo', descripcion: 'Malteada de vainilla con galletas Oreo', precio: 16000, categoria: 'Malteadas' },
    ],
  },
];

@Injectable()
export class RestaurantesService {
  findAll(localidad?: string): Restaurante[] {
    if (localidad) {
      return RESTAURANTES_BOGOTA.filter(
        (r) => r.localidad.toLowerCase() === localidad.toLowerCase(),
      );
    }
    return RESTAURANTES_BOGOTA;
  }

  findOne(id: string): Restaurante | undefined {
    return RESTAURANTES_BOGOTA.find((r) => r.id === id);
  }

  getLocalidades(): string[] {
    return [...new Set(RESTAURANTES_BOGOTA.map((r) => r.localidad))];
  }
}
