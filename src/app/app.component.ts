import { Component } from '@angular/core';
import { AppsettingsService } from './unicorns/services/appsettings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private appSettings: AppsettingsService) {}
  title = this.appSettings.title;
}
