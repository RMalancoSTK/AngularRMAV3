import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '../interfaces/data';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [],
})
export class WelcomeComponent {
  constructor(private dataService: DataService) {}
  displayedColumns: string[] = ['name', 'age', 'is', 'city', 'state'];
  dataSource: Data[] = [];
  longText!: string;

  ngOnInit(): void {
    this.dataService.getDatas().subscribe((data) => {
      this.dataSource = data.my_data;
      this.longText = `Mi nombre es ${this.dataSource[0].name}, Mi IS es ${this.dataSource[0].is}. Tengo ${this.dataSource[0].age} años y soy de ${this.dataSource[0].city}, ${this.dataSource[0].state}`;
    });
  }
}
