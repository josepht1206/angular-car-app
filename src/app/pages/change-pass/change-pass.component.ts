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
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css'],
})
export class ChangePassComponent implements OnInit {
  changePassForm!: FormGroup;
  isLoading = false;
  isError = false;
  errorMessage = '';
  isSuccess = false;
  successMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.changePassForm = this.formBuilder.group(
      {
        currentPass: ['', Validators.required],
        newPass: ['', [Validators.required, Validators.minLength(6)]],
        confirmNewPass: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const newPass = control.get('newPass');
    const confirmNewPass = control.get('confirmNewPass');

    if (newPass?.value !== confirmNewPass?.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    console.log('New Password : ', this.changePassForm.value.newPass);

    this.authService
      .changePassword(this.changePassForm.value.newPass)
      .subscribe(
        () => {
          this.isLoading = false;
          this.isSuccess = true;
          this.successMessage = 'New password saved';
        },
        (error) => {
          this.isLoading = false;
          if (error.error?.error?.message === 'INVALID_ID_TOKEN') {
            this.isError = true;
            this.errorMessage = 'Invalid token. Please try again.';
          } else {
            this.isError = true;
            this.errorMessage =
              error.error?.error?.message ||
              'An error occurred. Please try again.';
          }
        }
      );
  }
}
