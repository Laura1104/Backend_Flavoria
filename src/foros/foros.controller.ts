import { Controller, Get, Post, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ForosService} from './foros.service';
import { CreateForoDto } from './dto/create-foro.dto';
import type { Foro } from './foros.service';

@Controller('foros')
export class ForosController {
  constructor(private readonly forosService: ForosService) {}

  // GET /api/foros
  @Get()
  findAll(): { data: Foro[]; total: number } {
    const data = this.forosService.findAll();
    return { data, total: data.length };
  }

  // GET /api/foros/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Foro {
    return this.forosService.findOne(id);
  }

  // POST /api/foros
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateForoDto): Foro {
    return this.forosService.create(dto);
  }
}