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

  constructor(
    private loginStore: Store<LoginState>,
  ) { }

  ngOnInit(): void { }

  public testNGRX(): void {
    this.loginStore.dispatch( Login( { user: 'testing' } ) );
    this.loginStore.select( state => state.user).subscribe(
      user => console.log(user)
    );
  }

}
