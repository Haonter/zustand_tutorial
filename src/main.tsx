// import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AppRoutes } from './routes';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/'>
    <AppRoutes />
  </BrowserRouter>
);
