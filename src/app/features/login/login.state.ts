
export interface LoginState {
    user: string;
    isGuest: boolean;
}

export const initialLoginState: LoginState = {
    user: null,
    isGuest: null,
};

export function getInitalState(): LoginState {
    return initialLoginState;
}
