import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes, LoadDataFinished } from './inventory.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class InventoryEffects {

    constructor(
        private actions$: Actions,
    ) { }

    @Effect()
    loadData$ = this.actions$.pipe(
        ofType(ActionTypes.LOAD_DATA),
        map( data => LoadDataFinished({ items: 'temp'})),
    );
}