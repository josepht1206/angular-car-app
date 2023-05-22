import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  isError = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    if (this.authService.getIsLoggedIn() === true) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.isLoading = true;

    this.authService.signin(email, password).subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.authService.saveUsername(email, password);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.isLoading = false;
        if (error.error?.error?.message === 'EMAIL_NOT_FOUND') {
          this.isError = true;
          this.errorMessage = 'Invalid email address. Please try again.';
        }
        if (error.error?.error?.message === 'INVALID_PASSWORD') {
          this.isError = true;
          this.errorMessage = 'Invalid password. Please try again.';
        } else {
          this.isError = true;
          this.errorMessage =
            error.error?.error?.message ||
            'An error occurred. Please try again.';
        }
      }
    );

    this.loginForm.reset();
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  register() {
    this.router.navigate(['/register']);
  }
}
