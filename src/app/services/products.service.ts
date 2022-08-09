import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }

  getMeters(): Observable<any> {

    const headers = new HttpHeaders()
      .set('accept', 'application/json');

    const route = '/meters/';
    return this.http.get<any>(`${apiURL}${route}`, { headers });
  }

  createMeter(data: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('accept', 'application/json');
    const route = '/meters/';
    return this.http.post<any>(`${apiURL}${route}`, data, { headers });
  }

  editMeter(id: string, data: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('accept', 'application/json');
    const route = `/meters/${id}`;
    return this.http.patch<any>(`${apiURL}${route}`, data, { headers });
  }

  deleteMeter(id: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json');
    const route = `/meters/${id}`;
    return this.http.delete<any>(`${apiURL}${route}`, { headers });
  }

}
