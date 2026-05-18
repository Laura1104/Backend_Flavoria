import { Controller, Get, Post, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { EventosService} from './eventos.service';
import type { Evento } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  // GET /api/eventos
  @Get()
  findAll(): { data: Evento[]; total: number } {
    const data = this.eventosService.findAll();
    return { data, total: data.length };
  }

  // GET /api/eventos/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Evento {
    return this.eventosService.findOne(id);
  }

  // POST /api/eventos
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateEventoDto): Evento {
    return this.eventosService.create(dto);
  }
}