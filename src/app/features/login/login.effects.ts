import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginFinished } from './login.actions';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/common/firebase/services/auth.service';
import * as actions from './login.actions';

@Injectable()
export class LoginEffects {

    constructor(
        private actions$: Actions,
        private auth: AuthService,
    ) { }

    @Effect()
    login$ = this.actions$.pipe(
        ofType(actions.Login),
        switchMap( data => this.auth.login( data.email, data.password )),
        map( firebaseUser => LoginFinished({ user: firebaseUser })),
    );
}
