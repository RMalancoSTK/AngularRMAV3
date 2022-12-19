import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../interfaces/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _data: Data[] = [];
  private _misdatos: string[] = [];
  private jsonURL = 'assets/my_data.json';

  get misDatos() {
    return [...this._misdatos];
  }

  constructor(private http: HttpClient) {}

  getDatas(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
