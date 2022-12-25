import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../../shared/material.module';

const loginRoute: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(loginRoute), MaterialModule],
  exports: [RouterModule],
})
export class LoginRouteModule {}
