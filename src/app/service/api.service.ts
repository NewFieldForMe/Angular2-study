import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, public authHttp: AuthHttp) { }

  getAuthentication(accountId: string, password: string) {
    console.debug('test');
    this.http.post('http://localhost:3000/api/authenticate',
      JSON.stringify({
        "accountid": accountId,
        "password": password
      }), { headers: this.headers })
      .toPromise()
      .then(response => {
        var token = response.json()['auth_token'];
        console.log(token);
        sessionStorage.setItem('auth_token', token);
        this.authHttp.get('http://localhost:3000/api/sheetrows')
          .subscribe(
          data => console.log(data),
          err => console.log(err),
          () => console.log('Request Complete')
          );
      })
      .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error(error);
  }
}
