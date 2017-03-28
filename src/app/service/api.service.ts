import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, public authHttp: AuthHttp) { }

  getAuthentication(accountId: string, password: string) :Promise<Response> {
    return this.http.post('http://localhost:3000/api/authenticate',
      JSON.stringify({
        "accountid": accountId,
        "password": password
      }), { headers: this.headers })
      .map((response: Response) => {
        var token = response.json()['auth_token'];
        console.log(token);
        sessionStorage.setItem('auth_token', token);
        return response
      }).toPromise()
      // .then(response => {
      //   var token = response.json()['auth_token'];
      //   console.log(token);
      //   sessionStorage.setItem('auth_token', token);
      //   this.authHttp.get('http://localhost:3000/api/sheetrows')
      //     .subscribe(
      //     data => console.log(data),
      //     err => console.log(err),
      //     () => console.log('Request Complete')
      //     );
      // })
      // .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error(error);
  }
}
