import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getMeters(): Observable<any> {
    const route = '/meters/';
    return this.http.get<any>(`${apiURL}${route}`, { headers: this.headers });
  }

  deleteMeter(id: string): Observable<any> {
    const route = `/meters/${id}`;
    return this.http.delete<any>(`${apiURL}${route}`, { headers: this.headers });
  }

}
