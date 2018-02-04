import {
  createEmployee,
  CREATE_EMPLOYEE_LOADING,
  CREATED_EMPLOYEE,
  EMPLOYEE_RESET
} from '../actions/types';

const INIT_STATE = { 
  name: '',
  phone: '',
  shift: 'Monday',
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case createEmployee:
      // action.payload === { prop, value }
      return { ...state, loading: false, [action.payload.prop]: action.payload.value} // ES 6 square braces creates a key interpolation 
    
    case CREATE_EMPLOYEE_LOADING:
      return { ...state, loading: action.payload}
    
    case CREATED_EMPLOYEE:
      return { ...state, employee: action.payload}

    case EMPLOYEE_RESET:
      return { ...state, ...INIT_STATE }

    default:
      return state;
  }
}