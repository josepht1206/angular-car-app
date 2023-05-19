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

  ngOnInit() {
    this.forgetPassForm = this.formBuilder.group({
      usernameEmail: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.router.navigate(['/change-pass']);
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}
