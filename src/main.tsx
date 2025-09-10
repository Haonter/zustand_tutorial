import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AppRoutes } from '@/routes';

type ROOT_PATH_TYPE = '/' | '/zustand_tutorial'; // Ruta base del router (debe coincidir con la base de los assets construidos)

/*
 * Cálculo del `basename` para `BrowserRouter`:
 * - Durante el desarrollo (scripts `start` / `dev`) los scripts pasan `--base /zustand_tutorial/`.
 *   En ese caso `import.meta.env.BASE_URL` será `/zustand_tutorial/` y el router deberá usar
 *   `/zustand_tutorial` como `basename` para que las rutas internas coincidan con la URL simulada
 *   de GitHub Pages.
 * - Para la build de producción el proyecto genera assets con base relativa (`./`). Cuando
 *   `import.meta.env.BASE_URL` empieza por `.` (ruta relativa), el router debe usar `/` como
 *   `basename` para funcionar correctamente cuando `dist` se sirve desde diferentes contextos.
 * - El código abajo detecta estas dos situaciones y normaliza el valor eliminando la barra
 *   final si existe; sólo se actualizan comentarios, el código permanece sin cambios.
 */
const RAW_ROOT = (import.meta.env && import.meta.env.BASE_URL) || '/'; // ruta base desde Vite
const ROOT_PATH: ROOT_PATH_TYPE = RAW_ROOT.startsWith('.') ? '/' : (RAW_ROOT.replace(/\/$/, '') as ROOT_PATH_TYPE); // Elimina la barra final si existe

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={ROOT_PATH}>
    <AppRoutes />
  </BrowserRouter>
);
