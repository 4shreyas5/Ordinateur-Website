import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import { ThemeProvider } from '@material-tailwind/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
defineElement(lottie.loadAnimation);
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
