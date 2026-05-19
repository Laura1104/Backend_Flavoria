import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsuariosService } from '../usuarios/usuarios.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const usuario = await this.usuariosService.create(
      dto.nombre,
      dto.email,
      dto.password,
      dto.rol ?? 'consumer',
    );
    const token = this.jwtService.sign({ sub: usuario.id, email: usuario.email, rol: usuario.rol });
    return { token, usuario: this.usuariosService.toPublic(usuario) };
  }

  async login(dto: LoginDto) {
    const usuario = await this.usuariosService.findByEmail(dto.email);
    if (!usuario) throw new UnauthorizedException('Credenciales incorrectas');

    const valid = await bcrypt.compare(dto.password, usuario.passwordHash);
    if (!valid) throw new UnauthorizedException('Credenciales incorrectas');

    const token = this.jwtService.sign({ sub: usuario.id, email: usuario.email, rol: usuario.rol });
    return { token, usuario: this.usuariosService.toPublic(usuario) };
  }

  async me(userId: string) {
    const usuario = await this.usuariosService.findById(userId);
    if (!usuario) throw new UnauthorizedException();
    return this.usuariosService.toPublic(usuario);
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    const updated = await this.usuariosService.update(userId, dto);
    const token = this.jwtService.sign({ sub: updated.id, email: updated.email, rol: updated.rol });
    return { token, usuario: this.usuariosService.toPublic(updated) };
  }
}
