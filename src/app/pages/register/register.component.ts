import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoading = false;
  error: string = '';
  isSuccess = false;
  successMessage = '';
  isError = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      return;
    }
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    this.isLoading = true;

    this.authService.signup(email, password).subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.isSuccess = true;
        this.successMessage = 'You have successfully registered an account!';
        // this.router.navigate(['/login']);
      },
      (error) => {
        this.isLoading = false;
        if (error.error?.error?.message === 'EMAIL_EXISTS') {
          this.isError = true;
          this.errorMessage =
            'Email already exist. Please try with another email.';
        } else {
          this.isError = true;
          this.errorMessage =
            error.error?.error?.message ||
            'An error occurred. Please try again.';
        }
      }
    );

    this.registerForm.reset();
  }

  goBack() {
    this.router.navigate(['/login']);
  }
  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { passwordMismatch: true };
    }

    return null;
  }
}
