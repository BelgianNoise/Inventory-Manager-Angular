import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './login.actions';
import { getInitalState, LoginState } from './login.state';

const loginReduce = createReducer(
  getInitalState(),
  on(
    actions.LoginFinished,
    (state, { user }) => ({
      ...state, user, isGuest: false
    }),
  ),
);

export function reducer(state: LoginState, action: Action): any {
  return loginReduce(state, action);
}
