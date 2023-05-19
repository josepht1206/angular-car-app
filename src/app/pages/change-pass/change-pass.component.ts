import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css'],
})
export class ChangePassComponent implements OnInit {
  changePassForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

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
  }
}
