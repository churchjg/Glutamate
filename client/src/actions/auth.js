import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const signin = (formData, history) => async (dispatch) => {
  
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    alert("Sorry, try again. Please double check your password.");
  }
};



export const signup = (formData, history) => async (dispatch) => {
  
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
    
  } catch (error) {
    alert("Sorry! Either your passwords do not match or you are already in our system.");
  }
};