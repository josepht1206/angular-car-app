import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLogin = false;

  constructor(private authService: AuthService) {
    if (this.authService.getIsLoggedIn() === true) {
      this.isLogin = true;
    }
  }
}
