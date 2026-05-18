import { Controller, Get, Post, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { MarketplaceService, Producto } from './marketplace.service';
import { CreateProductoDto } from './dto/create-producto.dto';

@Controller('marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  // GET /api/marketplace
  @Get()
  findAll(): { data: Producto[]; total: number } {
    const data = this.marketplaceService.findAll();
    return { data, total: data.length };
  }

  // GET /api/marketplace/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Producto {
    return this.marketplaceService.findOne(id);
  }

  // POST /api/marketplace
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateProductoDto): Producto {
    return this.marketplaceService.create(dto);
  }
}