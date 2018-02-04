import { 
  createEmployee, 
  CREATE_EMPLOYEE_LOADING, 
  CREATED_EMPLOYEE, 
  EMPLOYEE_RESET,
  EMPLOYEE_FETCH_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
export const employeeUpdate = ({prop, value}) => {
  return {
    type: createEmployee,
    payload: { prop, value }
  }
};

export const employeeCreated = (employee) => {
  return {
    type: CREATED_EMPLOYEE,
    payload: employee
  }
}

export const employeeUpdating = (loading) => {
  console.log(`Inside employee updating ${loading}`);
  return {
    type: CREATE_EMPLOYEE_LOADING,
    payload: loading
  }
}

export const employeeCreatedReset = () => {
  return {
    type: EMPLOYEE_RESET
  }
}

export const employeeFetchSuccess = (employees) => {
  return {
    type: EMPLOYEE_FETCH_SUCCESS,
    payload: employees
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch(employeeUpdating(true));
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch(employeeUpdating(false));
        dispatch(employeeCreatedReset());
      });
    Actions.pop();
  }
}

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch(employeeFetchSuccess(snapshot.val()));
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch(employeeUpdating(true));
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        dispatch(employeeUpdating(false));
        dispatch(employeeCreatedReset());
        Actions.pop();
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  const db = firebase.database();
  return (dispatch) => {
    dispatch(employeeUpdating(true));
    db.ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch(employeeUpdating(false));
        dispatch(employeeCreatedReset());
        Actions.pop();
      });
  };
};