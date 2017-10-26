import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.jsx';
import { Provider } from 'react-redux';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
  <div>Hello, world!</div>
  </Provider>,
  document.getElementById('app')
);
