import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../../login.actions';
import { LoginState } from '../../login.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-area',
  templateUrl: './login-area.component.html',
  styleUrls: ['./login-area.component.scss']
})
export class LoginAreaComponent implements OnInit {

  public emailValue = '';
  get email(): string { return this.emailValue; }
  set email(val: string) { this.emailValue = val; }

  public passwordValue = '';
  get password(): string { return this.passwordValue; }
  set password(val: string) { this.passwordValue = val; }

  public loginForm: FormGroup;

  constructor(
    private loginStore: Store<LoginState>,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required, Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void { }

  public login(email: string, password: string): void {
    this.loginStore.dispatch(Login({ email, password }));
  }

}
