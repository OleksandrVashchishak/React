import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <Router>
    <CookiesProvider>
        <Provider store={store}>
          <App />
        </Provider>
    </CookiesProvider>
  </Router>,
  document.getElementById('root')
);



// eslint
// husky