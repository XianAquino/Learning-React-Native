import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CLEAR_FORM,
  EMPLOYEES_FETCH_SUCCESS,
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

const employessSaveOnSuccess = (dispatch, navigate) => {
  dispatch({
    type: EMPLOYEE_CLEAR_FORM
  });
  navigate('EmployeeList');
};

export const employeeCreate = ({ name, phone, shift, navigate }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        employessSaveOnSuccess(dispatch, navigate);
      })
      .catch((error) => console.log('errir', error));
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};


export const employeeSave = ({ name, phone, shift, uid, navigate }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        employessSaveOnSuccess(dispatch, navigate);
      });
  };
};

export const employeeDelete = ({ uid, navigate }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => navigate('EmployeeList'));
  };
};
