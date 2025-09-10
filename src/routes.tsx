import { Routes, Route } from 'react-router-dom';
import Home from '@/views/Home/Home';
import E404 from './views/Error/E404';
import E500 from './views/Error/E500';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta raíz de la app: cuando el router tiene basename '/zustand_tutorial', esta ruta corresponderá a '/zustand_tutorial/' en el navegador. */}
      <Route path='/' element={<Home />} />
      <Route path='/server-error' element={<E500 />} />
      {/* Captura cualquier ruta no definida relativa al basename activo; por ejemplo '/zustand_tutorial/otra-ruta' si el basename es '/zustand_tutorial'. */}
      <Route path='/*' element={<E404 />} />
    </Routes>
  );
};