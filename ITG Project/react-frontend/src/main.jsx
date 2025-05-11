import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import { TokenProvider } from './common/TokenContext.jsx';
import { AxiosProvider } from './common/AxiosContext.jsx';

createRoot(document.getElementById('root')).render(
    <TokenProvider>
    <AxiosProvider>
          <App />
    </AxiosProvider>
    </TokenProvider>
)
