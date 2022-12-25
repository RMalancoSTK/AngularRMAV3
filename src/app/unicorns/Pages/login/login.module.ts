import { NgModule } from '@angular/core';
import { LoginRouteModule } from './login.route';
import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material.module';

@NgModule({
  imports: [LoginRouteModule, FormsModule, MaterialModule],
  declarations: [LoginComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
