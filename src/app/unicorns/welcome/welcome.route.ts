import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { MaterialModule } from '../../shared/material.module';

const welcomeRoute: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    data: {
      title: 'Login',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(welcomeRoute), MaterialModule],
  exports: [RouterModule],
})
export class WelcomeRouteModule {}
