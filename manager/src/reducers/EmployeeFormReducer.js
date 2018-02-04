import {
  createEmployee
} from '../actions/types';

const INIT_STATE = { 
  name: '',
  phone: '',
  shift: '',
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case createEmployee:
      // action.payload === { prop, value }
      return { ...state, [action.payload.prop]: action.payload.value } // ES 6 square braces creates a key interpolation 
    default:
      return state;
  }
}