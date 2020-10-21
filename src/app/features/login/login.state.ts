
export interface LoginState {
    user: firebase.auth.UserCredential;
    isGuest: boolean;
}

export const initialLoginState: LoginState = {
    user: null,
    isGuest: null,
};

export function getInitalState(): LoginState {
    return initialLoginState;
}
