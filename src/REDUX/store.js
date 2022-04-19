import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { LoginReducer } from './AUTH/Reducer';
import thunk from 'redux-thunk'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;
const middleware = [thunk]
const enhancer = (
    applyMiddleware(...middleware)
);


export const Store = createStore(LoginReducer,enhancer)