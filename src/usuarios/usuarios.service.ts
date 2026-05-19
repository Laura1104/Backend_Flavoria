import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  passwordHash: string;
  rol: 'consumer' | 'restaurant' | 'admin';
  createdAt: Date;
}

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [
    {
      id: '1',
      nombre: 'Admin Flavoria',
      email: 'admin@flavoria.com',
      passwordHash: bcrypt.hashSync('admin123', 10),
      rol: 'admin',
      createdAt: new Date(),
    },
  ];

  async findByEmail(email: string): Promise<Usuario | undefined> {
    return this.usuarios.find((u) => u.email === email);
  }

  async findById(id: string): Promise<Usuario | undefined> {
    return this.usuarios.find((u) => u.id === id);
  }

  async create(nombre: string, email: string, password: string, rol: 'consumer' | 'restaurant' = 'consumer'): Promise<Usuario> {
    const exists = await this.findByEmail(email);
    if (exists) throw new ConflictException('El email ya está registrado');

    const passwordHash = await bcrypt.hash(password, 10);
    const usuario: Usuario = {
      id: String(this.usuarios.length + 1),
      nombre,
      email,
      passwordHash,
      rol,
      createdAt: new Date(),
    };
    this.usuarios.push(usuario);
    return usuario;
  }

  async update(id: string, data: { nombre?: string; email?: string; password?: string }): Promise<Usuario> {
    const idx = this.usuarios.findIndex((u) => u.id === id);
    if (idx === -1) throw new NotFoundException('Usuario no encontrado');

    if (data.email && data.email !== this.usuarios[idx].email) {
      const taken = await this.findByEmail(data.email);
      if (taken) throw new ConflictException('El email ya está en uso');
    }

    const updated = { ...this.usuarios[idx] };
    if (data.nombre)   updated.nombre       = data.nombre;
    if (data.email)    updated.email        = data.email;
    if (data.password) updated.passwordHash = await bcrypt.hash(data.password, 10);

    this.usuarios[idx] = updated;
    return updated;
  }

  toPublic(u: Usuario) {
    const { passwordHash, ...rest } = u;
    return rest;
  }
}
