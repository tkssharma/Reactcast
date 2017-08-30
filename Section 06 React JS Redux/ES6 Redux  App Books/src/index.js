import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import reducers from './reducers';

import { createStore, applyMiddleware, compose } from 'redux';



const store = createStore(
	reducers,
	compose(window.devToolsExtension ? window.devToolsExtension() : f => f )
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
