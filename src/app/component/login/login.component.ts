import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../../service/api.service';
import { AuthHttp } from 'angular2-jwt';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId: string
  password: string
  errorMessage: string

  constructor(
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.errorMessage = "";
  }

  hoge() {
    return true;
  }

  loginClick(event) {
    let promise = this.apiService.getAuthentication(this.loginId, this.password);
    promise.then(response => {
        console.log(response)
        this.router.navigate(['mainpage']);
      })
      .catch((error:any) => {
        console.debug()
        this.errorMessage = "ログインに失敗しました。";
      });
  }
}
