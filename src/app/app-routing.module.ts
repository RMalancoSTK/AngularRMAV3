import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () =>
      import('./unicorns/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'unicorns',
    loadChildren: () =>
      import('./unicorns/unicorns/unicorns.module').then(
        (m) => m.UnicornsModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./unicorns/login/login.module').then((m) => m.LoginModule),
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// commando para crear un modulo sin test: ng g m unicorns --skip-tests
