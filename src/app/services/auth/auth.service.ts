import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface AuthResponseData {
  idToken: string; //A Firebase Auth ID token for the newly created user.
  email: string; //The email for the newly created user.
  refreshToken: string; //A Firebase Auth refresh token for the newly created user.
  expiresIn: string; //The number of seconds in which the ID token expires.
  localId: string; //The uid of the newly created user.
  registerd?: boolean; //Whether the email is for an existing account.
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  private user = new BehaviorSubject<string | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) {
    // Check if the login state is stored in localStorage
    const storedLoginState = localStorage.getItem('isLoggedIn');

    // Set the initial login state based on the stored value
    this.loggedIn.next(storedLoginState === 'true');

    // Store the username
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user.next(storedUser);
    }
  }

  saveUsername(username: string, password: string) {
    // After successful login, update the login state and store it in localStorage
    this.loggedIn.next(true);
    localStorage.setItem('isLoggedIn', 'true');

    // After successful login, update the username and store it in localStorage
    this.user.next(username);
    localStorage.setItem('user', username);
  }

  logout() {
    // After successful logout, update the login state and remove it from localStorage
    this.loggedIn.next(false);
    localStorage.removeItem('isLoggedIn');

    // After successful login, remove the username and store it in localStorage
    this.user.next(null);
    localStorage.removeItem('user');
  }

  getIsLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXxi0ToWAHLHr1sRxHEboRiZK-GF5s_Ys',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }

  signin(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXxi0ToWAHLHr1sRxHEboRiZK-GF5s_Ys',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }

  resetPassword(email: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAXxi0ToWAHLHr1sRxHEboRiZK-GF5s_Ys',
      {
        requestType: 'PASSWORD_RESET',
        email: email,
      }
    );
  }

  changePassword(newPassword: string) {
    // Retrieve the stored idToken from local storage
    const idToken = localStorage.getItem('idToken');
    console.log(idToken);

    // Make the request to change the password using the idToken
    return this.http.post<any>(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAXxi0ToWAHLHr1sRxHEboRiZK-GF5s_Ys',
      {
        idToken: idToken,
        password: newPassword,
        returnSecureToken: true,
      }
    );
  }
}
