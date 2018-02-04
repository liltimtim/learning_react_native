import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeUpdateReducer from './EmployeeFormReducer';
export default combineReducers({
    auth: AuthReducer,
    createEmployee: EmployeeUpdateReducer
});