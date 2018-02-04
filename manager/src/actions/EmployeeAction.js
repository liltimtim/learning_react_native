import { createEmployee, CREATE_EMPLOYEE_LOADING } from './types';
export const employeeUpdate = ({prop, value}) => {
  return {
    type: createEmployee,
    payload: { prop, value }
  }
};

export const employeeUpdating = (loading) => {
  return {
    type: CREATE_EMPLOYEE_LOADING,
    payload: loading
  }
}