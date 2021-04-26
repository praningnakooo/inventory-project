import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../../shared/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      user_name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    })
  }
  
  signup(): void {
    this.authservice.signup(this.signupForm.value).subscribe((msg) => console.log(msg));
  }

}
