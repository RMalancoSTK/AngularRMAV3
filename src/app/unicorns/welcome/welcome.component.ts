import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '../interfaces/data';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [],
})
export class WelcomeComponent {
  constructor(private mydata: DataService) {}
  resultados: Data[] = [];
  longText!: string;

  ngOnInit(): void {
    this.mydata.getDatas().subscribe((data) => {
      this.resultados = data.my_data;
      this.longText = `Mi nombre es ${this.resultados[0].name}, Mi IS es ${this.resultados[0].is}. Tengo ${this.resultados[0].age} años y soy de ${this.resultados[0].city}, ${this.resultados[0].state}`;
    });
  }
}
