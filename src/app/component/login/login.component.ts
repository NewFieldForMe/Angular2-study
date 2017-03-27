import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId: string
  password: string

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  loginClick(event) {
    this.apiService.getAuthentication(this.loginId, this.password);
    //this.router.navigate(['mainpage']);
  }

}
