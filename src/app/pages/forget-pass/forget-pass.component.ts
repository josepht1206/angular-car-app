import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css'],
})
export class ForgetPassComponent implements OnInit {
  forgetPassForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.forgetPassForm = this.formBuilder.group({
      usernameEmail: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    // Logic to handle form submission and reset password
    const usernameEmail = this.forgetPassForm.value.usernameEmail;

    // Perform any necessary actions (e.g., send a reset password email)

    // Redirect to the change-pass screen
    this.router.navigate(['/change-pass']);
  }

  goBack(): void {
    // Redirect to the login screen
    this.router.navigate(['/login']);
  }
}
