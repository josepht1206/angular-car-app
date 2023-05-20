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
  error = '';

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
        console.log(error);
        this.error = 'An error occureed!';
        this.isLoading = false;
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
