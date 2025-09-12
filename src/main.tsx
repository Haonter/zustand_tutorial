import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AppRoutes } from '@/routes';

const BASE_PATH = '/zustand_tutorial';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={BASE_PATH}>
    <AppRoutes />
  </BrowserRouter>
);
