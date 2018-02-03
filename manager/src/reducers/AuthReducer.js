// handles anything related to authentication with the app. 
import { EMAIL_CHANGED, PASSWORD_CHANGED, AUTH_LOADING, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from '../actions/types';
const INITIAL_STATE = { 
    email: '', 
    password: '', 
    loading: false, 
    user: null,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload, error: null };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, error: null };

        case AUTH_LOADING:
            return { ...state, loading: action.payload };

        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        
        case LOGIN_USER_ERROR:
            return { ...state, error: action.payload };

        default: return state;
    }
}