import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  loggedInUser: string | null | undefined;
  isNavCollapsed = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });

    this.authService.user$.subscribe((user) => {
      this.loggedInUser = this.getUsernameWithoutDomain(user);
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

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
