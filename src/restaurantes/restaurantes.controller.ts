import { Controller, Get, Param, Query } from '@nestjs/common';
import { RestaurantesService } from './restaurantes.service';

@Controller('restaurantes')
export class RestaurantesController {
  constructor(private readonly restaurantesService: RestaurantesService) {}

  @Get()
  findAll(@Query('localidad') localidad?: string) {
    return this.restaurantesService.findAll(localidad);
  }

  @Get('localidades')
  getLocalidades() {
    return this.restaurantesService.getLocalidades();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantesService.findOne(id);
  }
}
