import { createAction, props } from '@ngrx/store';

export const ActionTypes = {
    LOGIN: '[Login] Login',
    LOGIN_FINISHED: '[Login] Login Finished',
};

export const Login = createAction(
    ActionTypes.LOGIN,
    props<{ user: string }>(),
);

export const LoginFinished = createAction(
    ActionTypes.LOGIN_FINISHED,
    props<{ user: string }>()
);
