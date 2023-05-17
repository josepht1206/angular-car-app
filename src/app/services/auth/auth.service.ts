import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loggedInKey = 'isLoggedIn';

  login(): void {
    // Perform login logic here
    localStorage.setItem(this.loggedInKey, 'true');
  }

  logout(): void {
    // Perform logout logic here
    localStorage.removeItem(this.loggedInKey);
  }

  getIsLoggedIn(): boolean {
    return localStorage.getItem(this.loggedInKey) === 'true';
  }
}
