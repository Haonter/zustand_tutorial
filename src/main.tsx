import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AppRoutes } from '@/routes';

/*
  BASE_PATH indica la ruta raiz desde la cual se sirve la aplicacion, en este caso '/zustand_tutorial'
  ¿Por que?, porque el proyecto se encuentra alojado en GitHub Pages en la ruta: https://haonter.github.io/zustand_tutorial
  de manera que si no se especifica el BASE_PATH, la aplicacion buscara los recursos (assets) en la ruta raiz del dominio (https://haonter.github.io/)
  y no los encontrara, resultando en errores 404 al intentar cargar los recursos.

  Si el proyecto estuviera alojado en otro dominio, por ejemplo en https://didacus.dev, el BASE_PATH deberia ser simplemente '/'
  ya que la aplicacion se sirve desde la raiz del dominio.


  Otro dato es que en los scripts del package.json, se han configurado como:
  "scripts": {
    "start": "vite --base /zustand_tutorial/ --port 5000",
    "dev": "vite --base /zustand_tutorial/ --port 5001 --host",
    "build": "tsc -b && vite build --base ./",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "preview": "vite preview --port 3000"
  }

  De manera que en el script start se ha configurado el parametro --base /zustand_tutorial/ --port 5000
  y en el script dev, se ha configurado el parametro --base /zustand_tutorial/ --port 5001 --host

  Esto es para que al ejecutar npm start o npm run dev, el servidor de desarrollo sirva la aplicacion desde la ruta /zustand_tutorial
  en sus respectivos puestos (5000 para start y 5001 para dev) y no desde la raiz del dominio.

  Mientras que en el script build, se ha configurado el parametro --base "./",
  para que al construir la aplicacion para produccion, los recursos (assets) se busquen en la ruta
  desde donde se sirva la aplicacion que en este caso seria https://haonter.github.io/zustand_tutorial/assets
  y no en la raiz del dominio (https://haonter.github.io/assets), esto daria errores 404.
*/
const BASE_PATH = '/zustand_tutorial';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={BASE_PATH}>
    <AppRoutes />
  </BrowserRouter>
);
