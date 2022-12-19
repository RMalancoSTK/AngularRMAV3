import { NgModule } from '@angular/core';
import { WelcomeRouteModule } from './welcome.route';
import { WelcomeComponent } from './welcome.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [WelcomeRouteModule, MatCardModule],
  declarations: [WelcomeComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomeModule {}

// Angular material se puede crear un servicio para manejar los componentes de angular material
// creando un modulo de tipo material.module.ts dentro de la carpeta shared:
// ng g m shared/material --flat
