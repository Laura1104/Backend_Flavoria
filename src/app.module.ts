import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NutritionPlanModule } from './nutrition-plan/nutrition-plan.module';
import { RecetasModule } from './recetas/recetas.module';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { ForosModule } from './foros/foros.module';
import { EventosModule } from './eventos/eventos.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RestaurantesModule } from './restaurantes/restaurantes.module';

@Module({
  imports: [
    NutritionPlanModule,
    RecetasModule,
    MarketplaceModule,
    ForosModule,
    EventosModule,
    UsuariosModule,
    AuthModule,
    RestaurantesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
