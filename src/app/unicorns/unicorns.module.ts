import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { UnicornsComponent } from './unicorns/unicorns.component';

@NgModule({
  declarations: [WelcomeComponent, LoginComponent, UnicornsComponent],
  imports: [CommonModule],
})
export class UnicornsModule {}
