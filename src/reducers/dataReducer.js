// import {socket} from '../../App';

import {
  SET_SCREAMS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  SUBMIT_COMMENT,
  SET_USER_PROFILE,
  NEW_SCREAM_IN,
  DELIVER_UPDATED_SCREAM_TO_REDUCER,
} from '../actions/types';

const initialState = {
  screams: [],
  scream: {},
  loading: false,
  user:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false
      };
    case SET_SCREAM:
      return {
        ...state,
        scream: action.payload
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload.screamId
      );
      state.screams[index] = action.payload;
      if (state.scream.screamId === action.payload.screamId) {
        state.scream = action.payload;
      }
      return {
        ...state
      };
    case DELETE_SCREAM:
      index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload
      );
      state.screams.splice(index, 1);
      return {
        ...state
      };
    case POST_SCREAM:
      // console.log(action.payload);
      socket && socket.emit(NEW_SCREAM_IN, action.payload.resScream);
      return {
        ...state,
        screams: [action.payload.resScream, ...state.screams]
      };
    case DELIVER_UPDATED_SCREAM_TO_REDUCER:
      return {
        ...state,
        screams: [action.new_scream, ...state.screams]
      };
      
    case SUBMIT_COMMENT:
      return {
        ...state,
        scream: {
          ...state.scream,
          comments: [action.payload, ...state.scream.comments]
        }
      };
    case SET_USER_PROFILE:
        return {
          ...state,
        loading:false,
        ...action.payload.userData
      };
    default:
      return state;
  }
}
