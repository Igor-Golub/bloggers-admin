import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from 'app/providers/AppProvider.tsx';
import { App } from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
