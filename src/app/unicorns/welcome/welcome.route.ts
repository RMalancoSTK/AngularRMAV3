import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
//mat-table import
import { MatTableModule } from '@angular/material/table';

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
  imports: [RouterModule.forChild(welcomeRoute), MatTableModule],
  exports: [RouterModule],
})
export class WelcomeRouteModule {}
