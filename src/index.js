import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

import App from './App';
import Wall from './_TEST/wall';
import { UserProvider } from './contexts/user.context';

import reportWebVitals from './reportWebVitals';
import Main from '../src/_TEST/main'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> 
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// anything nested in the UserProvider will have access to the context value inside the provider