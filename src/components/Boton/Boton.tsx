import styles from '@/styles/styles';

interface BotonProps {
  tipo: 'dividir' | 'agregar' | 'eliminar' | 'doble';
  contenido: string;
  accion: () => void;
}

const Boton = ({ tipo, contenido, accion }: BotonProps) => {
  return (
    <button className={String(styles.button[tipo as keyof typeof styles.button])} onClick={accion}>
      {contenido}
    </button>
  );
};

export default Boton;