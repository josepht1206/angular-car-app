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
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    this.router.navigate(['/dashboard']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
