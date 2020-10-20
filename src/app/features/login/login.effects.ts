import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes, LoginFinished } from './login.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginEffects {

    constructor(
        private actions$: Actions,
    ) { }

    @Effect()
    login$ = this.actions$.pipe(
        ofType(ActionTypes.LOGIN),
        map( data => LoginFinished({ user: 'temp'})),
    );
}