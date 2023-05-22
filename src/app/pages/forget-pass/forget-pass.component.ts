import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css'],
})
export class ForgetPassComponent implements OnInit {
  forgetPassForm!: FormGroup;
  isLoading = false;
  isError = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.forgetPassForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.forgetPassForm.invalid) {
      return;
    }

    const email = this.forgetPassForm.value.email;

    this.isLoading = true;
    this.isError = false;
    this.errorMessage = '';

    this.authService.resetPassword(email).subscribe(
      () => {
        this.isLoading = false;
        this.router.navigate(['/reset-pass']);
      },
      (error) => {
        this.isLoading = false;
        if (error.error?.error?.message === 'EMAIL_NOT_FOUND') {
          this.isError = true;
          this.errorMessage = 'Invalid email address. Please try again.';
        } else {
          this.isError = true;
          this.errorMessage =
            error.error?.error?.message ||
            'An error occurred. Please try again.';
        }
      }
    );
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}
