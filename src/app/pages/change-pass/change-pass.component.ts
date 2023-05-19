import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css'],
})
export class ChangePassComponent implements OnInit {
  changePassForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.changePassForm = this.formBuilder.group({
      currentPass: ['', Validators.required],
      newPass: ['', Validators.required],
      confirmNewPass: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // Logic to handle form submission and change password
    const currentPass = this.changePassForm.value.currentPass;
    const newPass = this.changePassForm.value.newPass;
    const confirmNewPass = this.changePassForm.value.confirmNewPass;

    // Perform validation and change password logic
    if (newPass === confirmNewPass) {
      // Passwords match, perform the change password action

      // Redirect to a success page or relevant screen
      this.router.navigate(['/change-pass-success']);
    } else {
      // Passwords don't match, show an error message or perform relevant action
    }
  }
}
