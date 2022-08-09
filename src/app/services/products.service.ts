import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }

  getMeters(page?: number, textTosearch?: string): Observable<any> {
    console.log(textTosearch);

    let params = new HttpParams();

    if (textTosearch) {
      params = params.set('serial', textTosearch.toLowerCase());
    }

    if (page) {
      params = params.set('page', page.toString());
    }

    params = params.set('size', '10');

    const headers = new HttpHeaders()
      .set('accept', 'application/json');

    const httpOptions = {
      headers: headers,
      params
    };

    const route = '/meters/';
    return this.http.get<any>(`${apiURL}${route}`, httpOptions);
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
