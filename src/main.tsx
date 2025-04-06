import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = createRoot(
  document.getElementById('root') ??
    (() => {
      throw new Error('Root element not found');
    })(),
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
