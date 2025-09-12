import { defineConfig } from 'vite'; // Helper para tipar/autocompletar config
import react from '@vitejs/plugin-react-swc'; // Plugin React usando SWC (compilación rápida)
import tailwindcss from '@tailwindcss/vite'; // Plugin TailwindCSS para Vite

// https://vite.dev/config/
export default defineConfig({
  base: './', // Base path para recursos (assets) relativos
  plugins: [react(), tailwindcss()], // Array de plugins activos (React fast refresh + JSX + TailwindCSS)
  resolve: { // Opciones de resolución de módulos
    alias: { // Alias personalizados
      '@': '/src', // Permite importar desde src con '@/'
      '@views': '/src/views', // Alias para vistas/páginas
      '@components': '/src/components', // Alias para componentes
    }
  }
});
