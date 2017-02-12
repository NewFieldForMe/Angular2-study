import { Component } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
}
