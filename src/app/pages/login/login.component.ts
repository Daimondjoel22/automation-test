import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    firstName: [''],
    lastName: [''],
    confirmEmail: [''],
  });

  isSignIn = true;
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.loginForm.setValidators([this.checkEmails]);
    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.loginForm.updateValueAndValidity();
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  switchState() {
    this.isSignIn = !this.isSignIn;
    if (this.isSignIn) {
      this.loginForm.get('confirmEmail')?.clearValidators();
      this.loginForm.get('firstName')?.clearValidators();
      this.loginForm.get('lastName')?.clearValidators();
      this.loginForm.get('firstName')?.updateValueAndValidity();
      this.loginForm.get('lastName')?.updateValueAndValidity();
      this.loginForm.get('confirmEmail')?.updateValueAndValidity();
    } else {
      this.loginForm
        .get('confirmEmail')
        ?.setValidators([Validators.required, Validators.email]);
      this.loginForm.get('firstName')?.setValidators([Validators.required]);
      this.loginForm.get('lastName')?.setValidators([Validators.required]);
      this.loginForm.get('firstName')?.updateValueAndValidity();
      this.loginForm.get('lastName')?.updateValueAndValidity();
      this.loginForm.get('confirmEmail')?.updateValueAndValidity();
    }
  }
  checkEmails(): ValidatorFn {
    console.log('checkEmails');
    const j = (group: AbstractControl): ValidationErrors | null => {
      const email = group?.get('email')?.value;
      const confirmEmail = group?.get('confirmEmail')?.value;
      console.log(email, confirmEmail);
      return email === confirmEmail ? null : { notSame: true };
    };
    return j;
  }

  userGoogleLogin() {
    this.authService.googleSignIn();
  }

  logout() {
    this.authService.signOut();
  }
}