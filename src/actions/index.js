import {
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  INCREMENT,
  DECREMENT,
  SET_USER
} from './types';
//

export function increment(){
    return{
      type: INCREMENT
    };
  }
  export function decrement(){
    return{
      type: DECREMENT
    };
  }
  export const loginUser = (userData) => (dispatch) => {

    dispatch({ type: SET_USER, payload: userData });
    
  };
  
  export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    
  };
  
  export const logoutUser = () => (dispatch) => {

    dispatch({ type: SET_UNAUTHENTICATED });
  };
  
  export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER });

  };