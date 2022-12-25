import { NgModule } from '@angular/core';
import { WelcomeRouteModule } from './welcome.route';
import { WelcomeComponent } from './welcome.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';

@NgModule({
  imports: [WelcomeRouteModule, MaterialModule],
  declarations: [WelcomeComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomeModule {}
