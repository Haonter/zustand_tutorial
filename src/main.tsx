import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AppRoutes } from '@/routes';

// Usa BASE_URL de Vite en tiempo de ejecución para que el basename del router siempre coincida con la base de los assets construidos.
// Si BASE_URL es una ruta relativa (por ejemplo, './'), usa '/' como valor predeterminado para el router.
const rawBase = (import.meta.env && import.meta.env.BASE_URL) || '/'; // ruta base desde vite.config.ts
export const basename = rawBase.startsWith('.') ? '/' : rawBase.replace(/\/$/, ''); // Elimina la barra final si existe

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={basename}>
    <AppRoutes />
  </BrowserRouter>
);
