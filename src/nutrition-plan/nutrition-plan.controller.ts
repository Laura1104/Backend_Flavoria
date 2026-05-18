import { Controller, Get, Post, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { NutritionPlanService, NutritionPlan } from './nutrition-plan.service';
import { CreateNutritionPlanDto } from './dto/create-nutrition-plan.dto';

@Controller('nutrition-plan')
export class NutritionPlanController {
  constructor(private readonly nutritionPlanService: NutritionPlanService) {}

  // GET /api/nutrition-plan
  @Get()
  findAll(): { data: NutritionPlan[]; total: number } {
    const data = this.nutritionPlanService.findAll();
    return { data, total: data.length };
  }

  // GET /api/nutrition-plan/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): NutritionPlan {
    return this.nutritionPlanService.findOne(id);
  }

  // POST /api/nutrition-plan
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateNutritionPlanDto): NutritionPlan {
    return this.nutritionPlanService.create(dto);
  }
}