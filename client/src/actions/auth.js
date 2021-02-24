import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const signin = (formData, history) => async (dispatch) => {
  alert("Signing you in!")
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    alert(error);
  }
};



export const signup = (formData, history) => async (dispatch) => {
  alert("Creating New Account")
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
    
  } catch (error) {
    alert(error);
  }
};