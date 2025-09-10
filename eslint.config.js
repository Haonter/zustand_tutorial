import js from '@eslint/js' // Reglas base recomendadas JS
import globals from 'globals' // Listas de variables globales predefinidas
import reactHooks from 'eslint-plugin-react-hooks' // Reglas para asegurar correcto uso de Hooks
import reactRefresh from 'eslint-plugin-react-refresh' // Integración Fast Refresh (verifica orden de exports)
import tseslint from 'typescript-eslint' // Soporte TS (parser + plugin configurado)
import { globalIgnores } from 'eslint/config' // Helper para ignorar patrones globales

export default tseslint.config([ // Exporta arreglo de bloques de configuración
  globalIgnores(['dist']), // Ignora carpeta dist (no lint a código generado)
  {
    files: ['**/*.{ts,tsx}'], // Aplica reglas a todos los TS/TSX del proyecto
    extends: [ // Conjuntos de reglas heredadas
      js.configs.recommended, // Buenas prácticas JS generales
      tseslint.configs.recommended, // Reglas de tipos TS esenciales
      reactHooks.configs['recommended-latest'], // Valida dependencias y orden de Hooks
      reactRefresh.configs.vite, // Asegura compatibilidad con React Fast Refresh
    ],
    languageOptions: { // Configuración del parser / entorno
      ecmaVersion: 2024, // Sintaxis soportada (ES2024)
      globals: globals.browser, // Define globals de navegador (window, document, etc.)
    },
    rules: {
      // Todas las reglas aquí
      'no-unused-vars': 'off', // ← En este caso se desactiva regla base de variables no usadas para delegar a TS (@typescript-eslint/no-unused-vars)
      '@typescript-eslint/no-unused-vars': ['error', {
        args: 'all',                  // Revisa todos los parámetros
        argsIgnorePattern: '^_',      // Ignora parámetros que empiezan con _
        varsIgnorePattern: '^_',      // (opcional) ignora variables locales con _
        caughtErrors: 'all',          // Revisa errores capturados en catch
        caughtErrorsIgnorePattern: '^_', // Ignora errores de catch con _
        ignoreRestSiblings: true      // Permite rest {...rest} sin usar
      }],
      'no-undef': 'error', // ← No permitir variables no definidas
      'prefer-const': 'error', // ← Preferir const sobre let
      'no-var': 'error', // ← No permitir var
      'eqeqeq': 'error', // ← Usar siempre === y !==
      'no-console': 'warn', // ← Advertencia para no dejar console.log en producción
      'indent': ['error', 2], // ← Indentación de 2 espacios
      'no-tabs': 'error', // ← No permitir tabulaciones
      'no-mixed-spaces-and-tabs': 'error', // ← No mezclar espacios y tabulaciones
      'no-trailing-spaces': 'error', // ← No permitir espacios al final de la línea

      // Manejo de longitudes de línea
      'max-len': ['error', {
        'code': 160 ,
        'ignoreTemplateLiterals': true, // ← Excepción para template strings
        'ignoreUrls': true, // ← Excepción para URLs largas
        'ignoreRegExpLiterals': true, // ← Excepción para expresiones regulares
        'ignoreStrings': false, // ← No ignorar cadenas de texto normales
        'ignoreComments': true, // ← No ignorar comentarios
      }], // ← Máximo 130 caracteres por línea
      'quotes': ['error', 'single'], // ← Usar comillas simples
      'prefer-template': 'error', // ← Preferir plantillas literales sobre concatenación
      'semi': ['error', 'always'], // ← Siempre usar punto y coma

      // Manejo de líneas vacías
      'no-multiple-empty-lines': ['error', {
        'max': 2,           // ← Máximo 2 líneas vacías consecutivas
        'maxEOF': 1,        // ← Máximo 1 línea vacía al final del archivo
        'maxBOF': 0         // ← 0 líneas vacías al inicio del archivo
      }],
    }
  }
])
