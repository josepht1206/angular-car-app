import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';

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
  API_KEY = 'AIzaSyAXxi0ToWAHLHr1sRxHEboRiZK-GF5s_Ys';
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
  private handleAuthentication(responseData: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +responseData.expiresIn * 1000
    );
    localStorage.setItem('idToken', responseData.idToken);
    localStorage.setItem('expiresIn', expirationDate.toString());
    // ... your existing code to handle login state and user storage
  }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXxi0ToWAHLHr1sRxHEboRiZK-GF5s_Ys',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((responseData: AuthResponseData) => {
          this.handleAuthentication(responseData);
        })
      );
  }

  signin(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXxi0ToWAHLHr1sRxHEboRiZK-GF5s_Ys',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((responseData: AuthResponseData) => {
          this.handleAuthentication(responseData);
        })
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
    const idToken = localStorage.getItem('idToken');

    if (!idToken) {
      return throwError('User is not authenticated.');
    }

    return this.http.post<any>(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${this.API_KEY}`,
      {
        idToken: idToken,
        password: newPassword,
        returnSecureToken: true,
      }
    );
  }
}
