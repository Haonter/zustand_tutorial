import { Routes, Route } from 'react-router-dom';
import Home from '@/views/Home/Home';
import E404 from './views/Error/E404';
import E500 from './views/Error/E500';
import { basename } from './main';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/zustand_tutorial" element={<Home />} />
      <Route path="/server-error" element={<E500 />} />
      <Route path={`${basename}*`} element={<E404 />} />
    </Routes>
  );
};