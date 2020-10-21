import { createAction, props } from '@ngrx/store';

export const ActionTypes = {
    LOGIN: '[Login] Login',
    LOGIN_FINISHED: '[Login] Login Finished',
    LOGOUT: '[Login] Logout',
    LOGOUT_FINISHED: '[Login] Logout Finished',
};

export const Login = createAction(
    ActionTypes.LOGIN,
    props<{ email: string, password: string }>(),
);

export const LoginFinished = createAction(
    ActionTypes.LOGIN_FINISHED,
    props<{ user: firebase.auth.UserCredential }>()
);

export const Logout = createAction(
    ActionTypes.LOGOUT,
);

export const LogoutFinished = createAction(
    ActionTypes.LOGOUT_FINISHED,
);
