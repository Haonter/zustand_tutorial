# zustand_tutorial

Proyecto de ejemplo: React + TypeScript + Vite + Zustand + TailwindCSS.

---

## Índice (navegación rápida)

- [Introducción](#introducción)
- [Quick start (Try it)](#quick-start-try-it)
- [Scripts disponibles](#scripts-disponibles)
- [Comportamiento de la base (dev vs build)](#comportamiento-de-la-base-dev-vs-build)
- [Rutas y router](#rutas-y-router)
- [Despliegue en GitHub Pages](#despliegue-en-github-pages)
- [Archivos relevantes](#archivos-relevantes)

---

## Introducción

Proyecto de ejemplo que combina React + TypeScript + Vite y utiliza Zustand para la gestión de estado.

---

## Puesta en marcha (Quick start)

Clona, instala y arranca en PowerShell:

```powershell
git clone https://github.com/Haonter/zustand_tutorial.git
cd zustand_tutorial
npm install
```

Desarrollo (simula la base de GitHub Pages):

```powershell
npm run start
# o
npm run dev
```

Build producción (assets con rutas relativas):

```powershell
npm run build
```

Servir `dist` para revisar la build:

```powershell
npm run preview
```

---

## Scripts disponibles

- **`npm run start`** — inicia Vite en modo desarrollo con `--base /zustand_tutorial/`.
- **`npm run dev`** — igual que start pero con `--host` para exponer la app en la red local.
- **`npm run build`** — compila TypeScript y ejecuta `vite build` con base relativa (`./`).
- **`npm run preview`** — sirve la carpeta `dist` usando base `/zustand_tutorial/`.

---

## Comportamiento de la base (dev vs build)

- **Desarrollo (`start`/`dev`)**: la app se sirve con base absoluta `/zustand_tutorial/` para que el
  entorno local emule el comportamiento de GitHub Pages.
- **Producción (`build`)**: la build se hace con base relativa `./`, de modo que los assets en `dist`
  usen rutas relativas y el paquete resultante sea portable.

---

## Rutas y router

- `src/main.tsx` calcula el `basename` del `BrowserRouter` leyendo `import.meta.env.BASE_URL`.
  - Si `BASE_URL` empieza por `.` (ruta relativa) el `basename` será `/`.
  - Si `BASE_URL` es una ruta absoluta como `/zustand_tutorial/`, el `basename` será `/zustand_tutorial`.
- `src/routes.tsx` define rutas con `BASE_PATH = '/zustand_tutorial'` para mapear las páginas bajo esa ruta.

---

## Despliegue (Deployment)

1. Ejecuta `npm run build`.
2. Sube el contenido de `dist` a la rama o servicio que uses para GitHub Pages u otro servidor.
3. La app estará disponible si se sube en Github en: `https://<usuario>.github.io/zustand_tutorial/` o si se sirve en otro dominio en: `http://<dominio>/zustand_tutorial/`.

---

## Archivos relevantes

- [`src/main.tsx`](https://github.com/Haonter/zustand_tutorial/blob/main/src/main.tsx) — calcula el `basename` del router leyendo `import.meta.env.BASE_URL` y contiene comentarios que describen las dos situaciones (dev vs build).
- [`src/routes.tsx`](https://github.com/Haonter/zustand_tutorial/blob/main/src/routes.tsx) — rutas de la app. Las rutas son relativas al `basename` activo.
- [`vite.config.ts`](https://github.com/Haonter/zustand_tutorial/blob/main/vite.config.ts) — configuración de Vite; el README y los scripts controlan si la base es `/zustand_tutorial/` (dev) o `./` (build).

Nota rápida para depuración

Si quieres comprobar el valor real que usa la app en tiempo de ejecución, añade temporalmente un
`console.log(import.meta.env.BASE_URL)` en `src/main.tsx`, ejecuta `npm run start` y observa la consola
del navegador. Repite con `npm run dev` y `npm run preview` para comparar.


