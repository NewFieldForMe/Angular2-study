import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { RouterModule }   from '@angular/router';
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ApiService } from './service/api.service';
import { AuthModule } from './module/auth.module';

let route = RouterModule.forRoot([
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mainpage',
    component: MainpageComponent
  },
])

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    route,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
