import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cc4 from './Cc4';
import Cc7 from './Cc7';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cc7 />
   <Cc4 />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
