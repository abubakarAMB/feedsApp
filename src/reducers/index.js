import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import countReducer from './countReducer.js';

const initialState = {};

const reducers = combineReducers({
  count: countReducer,
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;