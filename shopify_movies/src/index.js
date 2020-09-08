import React from 'react';
import ReactDOM from 'react-dom';
// Store
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// reducer
import { movieReducer } from "./reducers/movieReducer"

//styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const store = createStore(movieReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

