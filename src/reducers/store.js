import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import countReducer from './countReducer.js';
import userReducer from './userReducer';
import dataReducer from './dataReducer';
import uiReducer from './uiReducer';


const initialState = {};

const reducers = combineReducers({
  count: countReducer,
  form: formReducer,
  user: userReducer,
  data: dataReducer,
  UI: uiReducer
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;