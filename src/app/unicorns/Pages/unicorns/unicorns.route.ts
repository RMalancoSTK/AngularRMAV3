import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornsComponent } from './unicorns.component';
import { MaterialModule } from '../../../shared/material.module';

const unicornsRoute: Routes = [
  {
    path: '',
    component: UnicornsComponent,
    data: {
      title: 'Login',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(unicornsRoute), MaterialModule],
  exports: [RouterModule],
})
export class UnicornsRouteModule {}
