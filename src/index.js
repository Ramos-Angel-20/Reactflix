import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';

import './sass/index.scss';
import App from './App';
import store from './context/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
