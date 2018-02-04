import * as types from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: types.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: types.PASSWORD_CHANGED,
        payload: text
    };
};

export const authLoadingStateChanged = (loading) => {
    return {
        type: types.AUTH_LOADING,
        payload: loading
    };
};

export const userAuthenticated = (user) => {
    return {
        type: types.LOGIN_USER_SUCCESS,
        payload: user
    };
};
/**
 * 
 * @param {Object} param
 */
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch(authLoadingStateChanged(true));
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => { loginSuccess(dispatch, user); })
        .catch((err) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => { dispatch(userAuthenticated(user)); })
                .catch((err) => { loginUserFailed(dispatch, err); });
        });
    };
};

const loginSuccess = (dispatch, user) => {
    dispatch(authLoadingStateChanged(false));
    dispatch(userAuthenticated(user));

    // do not wrap Actions inside dispatch
    Actions.main();
}

const loginUserFailed = (dispatch, error) => {
    dispatch(authLoadingStateChanged(false));
    dispatch({ type: types.LOGIN_USER_ERROR, payload: error})
}