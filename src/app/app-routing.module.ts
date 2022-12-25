import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './unicorns/auth/authentication.guard';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () =>
      import('./unicorns/Pages/welcome/welcome.module').then(
        (m) => m.WelcomeModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'unicorns',
    loadChildren: () =>
      import('./unicorns/Pages/unicorns/unicorns.module').then(
        (m) => m.UnicornsModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./unicorns/Pages/login/login.module').then((m) => m.LoginModule),
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
