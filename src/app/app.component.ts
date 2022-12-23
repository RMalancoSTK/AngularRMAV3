import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AppsettingsService } from './unicorns/services/appsettings.service';
import { AuthenticationService } from './unicorns/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = this.appSettings.title;

  constructor(
    private appSettings: AppsettingsService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  isAuthenticated(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
