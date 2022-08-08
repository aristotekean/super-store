import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  doLogin(credentials: any): Observable<any> {


    const obs$ = new Observable(subscriber => {
      if (credentials.username !== 'admin' || credentials.password !== 'admin') {
        subscriber.error("ERROR: Check your credentials please!");
      }
      setTimeout(() => {
        subscriber.next({ username: 'admin', last_login: new Date(), access_token: '7WK5T79u5mIzjIXXi2oI9Fglmgivv7RAJ7izyj9tUyQ', authorization: 'Bearer' });
        subscriber.complete();
      }, 1000);
    });

    return obs$;

  }

}
