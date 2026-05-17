import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const resizeObserverErr = /ResizeObserver loop completed with undelivered notifications/i;

window.addEventListener('error', (e) => {
  if (resizeObserverErr.test(e.message)) {
    e.stopImmediatePropagation();
  }
});

window.addEventListener('unhandledrejection', (e) => {
  if (resizeObserverErr.test(e.reason?.message || '')) {
    e.preventDefault();
  }
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);