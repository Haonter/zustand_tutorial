import { defineConfig } from 'vite'; // Helper para tipar/autocompletar config
import react from '@vitejs/plugin-react-swc'; // Plugin React usando SWC (compilación rápida)
import tailwindcss from '@tailwindcss/vite'; // Plugin TailwindCSS para Vite

// https://vite.dev/config/
export default defineConfig({
  /*
   * Nota sobre la base de la aplicación:
   * - En ejecución local para desarrollo se pasa `--base /zustand_tutorial/` desde los scripts
   *   (`start` y `dev`) para que el servidor dev emule la ruta de GitHub Pages.
   * - Para la build de producción el script `build` invoca Vite con base relativa (`./`),
   *   de forma que los assets en `dist` referencien rutas relativas y el paquete sea portable.
   * - Aquí en la configuración se ha dejado `base: './'` para favorecer builds portables; los
   *   flags `--base` en los scripts de npm tienen prioridad en tiempo de ejecución cuando se usan.
   */
  base: './',
  plugins: [react(), tailwindcss()], // Array de plugins activos (React fast refresh + JSX + TailwindCSS)
  resolve: { // Opciones de resolución de módulos
    alias: { // Alias personalizados
      '@': '/src', // Permite importar desde src con '@/'
      '@views': '/src/views', // Alias para vistas/páginas
      '@components': '/src/components', // Alias para componentes
    }
  }
});
