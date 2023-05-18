import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css'],
})
export class DasboardComponent {
  constructor(private authService: AuthService) {
    // console.log('logged in?', this.authService.getIsLoggedIn());
  }
}
