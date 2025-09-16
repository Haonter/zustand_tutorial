import { useNavigate } from 'react-router-dom';
import Boton from '../Boton/Boton';
import styles from '@/styles/styles';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.nav.contenedor}>
      <h1 className={styles.nav.titulo}>Zustand Tutorial</h1>
      <div className={styles.nav.contenedorBotones}>
        <Boton tipo="navegar" contenido="Basico" accion={() => navigate('/')} />
        <Boton tipo="navegar" contenido="Avanzado" accion={() => navigate('/advanced')} />
      </div>
    </nav>
  );
};
export default Navbar;