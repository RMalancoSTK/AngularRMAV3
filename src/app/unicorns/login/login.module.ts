import { NgModule } from '@angular/core';
import { LoginRouteModule } from './login.route';
import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [LoginRouteModule, FormsModule, MatSnackBarModule],
  declarations: [LoginComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
