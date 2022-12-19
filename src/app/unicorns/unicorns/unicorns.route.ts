import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornsComponent } from './unicorns.component';

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
  imports: [RouterModule.forChild(unicornsRoute)],
  exports: [RouterModule],
})
export class UnicornsRouteModule {}
