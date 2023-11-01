import React from 'react';
import ReactDOM from 'react-dom/client';
import('custom-config-data').then((d) => d.processEnvs('ECHO'));

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
