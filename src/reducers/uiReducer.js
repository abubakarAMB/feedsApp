import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_ALERT_MESSAGE,
  CLEAR_ALERT_MESSAGE
} from '../actions/types';

const initialState = {
  loading: false,
  errors: null,
  alert_message: null,
  alert_type: null,
  alert:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null
      };
    case CLEAR_ALERT_MESSAGE:
      return {
        ...state,
        alert_message: null,
        alert_type: null,
        alert:false
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false
      };
    case SET_ALERT_MESSAGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
