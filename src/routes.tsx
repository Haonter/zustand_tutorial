import { Routes, Route } from 'react-router-dom';
import Home from '@/views/Home/Home';
import Advanced from '@/views/Advanced/Advanced';
import E404 from '@/views/Error/E404';
import E500 from '@/views/Error/E500';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/advanced'} element={<Advanced />} />
      <Route path={'/server-error'} element={<E500 />} />
      <Route path={'/*'} element={<E404 />} />
    </Routes>
  );
};