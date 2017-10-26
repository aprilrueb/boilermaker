import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.jsx';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;
