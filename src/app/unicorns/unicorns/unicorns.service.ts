import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';
import { Unicorns } from '../interfaces/unicorns';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  private resourceUrl = AppConstants.API_BASE_URL;
  private resourceID = AppConstants.API_ID;
  public resultados: Unicorns[] = [];

  constructor(private http: HttpClient) {}

  // GET
  getUnicorns(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      `${this.resourceUrl}/${this.resourceID}/unicorns`,
      {
        observe: 'response',
      }
    );
  }
}
