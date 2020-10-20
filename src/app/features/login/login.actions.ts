import { createAction, props } from '@ngrx/store';

export const ActionTypes = {
    LOGIN: '[Login] Login',
    LOGIN_FINISHED: '[Login] Login Finished',
};

export const Login = createAction(
    ActionTypes.LOGIN
);

export const LoginFinished = createAction(
    ActionTypes.LOGIN_FINISHED,
    props<{ user: string }>()
);
