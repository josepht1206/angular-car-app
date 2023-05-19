import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  private user = new BehaviorSubject<string | null>(null);
  user$ = this.user.asObservable();

  constructor() {
    // Check if the login state is stored in localStorage
    const storedLoginState = localStorage.getItem('isLoggedIn');

    // Set the initial login state based on the stored value
    this.loggedIn.next(storedLoginState === 'true');

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user.next(storedUser);
    }
  }

  login(username: string, password: string) {
    // After successful login, update the login state and store it in localStorage
    this.loggedIn.next(true);
    localStorage.setItem('isLoggedIn', 'true');

    this.user.next(username);
    localStorage.setItem('user', username);
  }

  logout() {
    // After successful logout, update the login state and remove it from localStorage
    this.loggedIn.next(false);
    localStorage.removeItem('isLoggedIn');

    this.user.next(null);
    localStorage.removeItem('user');
  }

  getIsLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
