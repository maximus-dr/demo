import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import { getRoutes } from './server/routes';
import './index.css';


getRoutes(
  (routes) => {
    ReactDOM.render(
      <React.StrictMode>
        <App routes={routes} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  },
  (err) => {
    console.log('Error: ', err);
  }
);
