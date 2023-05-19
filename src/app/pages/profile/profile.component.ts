import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  loggedInUser: string | null | undefined;
  username = '';
  email = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.loggedInUser = user;
      this.username = this.getUsernameWithoutDomain(user);
    });
  }

  getUsernameWithoutDomain(email: string | null): string {
    if (email) {
      const atIndex = email.indexOf('@');
      if (atIndex !== -1) {
        return email.substring(0, atIndex);
      }
    }
    return '';
  }
}
