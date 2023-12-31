import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from 'store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/countries-api/'>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

