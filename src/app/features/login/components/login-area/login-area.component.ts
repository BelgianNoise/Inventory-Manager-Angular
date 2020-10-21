import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../../login.actions';
import { LoginState } from '../../login.state';

@Component({
  selector: 'app-login-area',
  templateUrl: './login-area.component.html',
  styleUrls: ['./login-area.component.scss']
})
export class LoginAreaComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(
    private loginStore: Store<LoginState>,
  ) { }

  ngOnInit(): void { }

  public login(email: string, password: string): void {
    console.log(email, this.email);
    this.loginStore.dispatch( Login( { email, password } ) );
  }

}
