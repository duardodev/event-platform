import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { MenuProvider } from './contexts/MenuContext';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>
);
