import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
  <React.StrictMode>
    
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    
    
  </React.StrictMode>
  </Router>
);
