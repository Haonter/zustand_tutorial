import React, { useRef } from 'react';
import Boton from '@/components/Boton/Boton';
import Input from '@/components/Input/Input';
import styles from '@/styles/styles';
import useMyCounterStore from '@/stores/store';
import Navbar from '@/components/Navbar/Navbar';

const Home: React.FC = () => {

  // Desestructuración del hook "useMyCounterStore"
  const [
    contadores,
    incrementarContador,
    incrementarContadorEnCantidad,
    duplicarContador,
    dividirContador,
    eliminarTodosLosContadores
  ] = [
    useMyCounterStore((state) => state.contador),
    useMyCounterStore((state) => state.incrementarContador),
    useMyCounterStore((state) => state.incrementarContadorEnCantidad),
    useMyCounterStore((state) => state.duplicarContador),
    useMyCounterStore((state) => state.dividirContador),
    useMyCounterStore((state) => state.eliminarTodosLosContadores)
  ];

  /*
    Tambien se puede extraer solo lo que se necesita del hook, por ejemplo:

    const contadores = useMyCounterStore((state) => state.contadores);
    const incrementarContador = useMyCounterStore((state) => state.incrementarContador);
    const eliminarTodosLosContadores = useMyCounterStore((state) => state.eliminarTodosLosContadores);
  */

  const cantidadRef = useRef<HTMLInputElement>(null);
  const customIncreasePopulation = () => {
    const cantidad = +(cantidadRef.current as HTMLInputElement).value || 1;
    incrementarContadorEnCantidad(cantidad);
  };

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.contentContainer}>
        <h1 className={styles.header}>Cuenta: {contadores}</h1>
        <Boton tipo='agregar' contenido='Agregar 1' accion={incrementarContador} />
        <Input tipo="number" name="cantidad" id="cantidad" ref={cantidadRef} />

        <div className={styles.homeContenedorBotones}>
          <Boton tipo='agregar' contenido='Agregar cantidad' accion={customIncreasePopulation} />
          <Boton tipo='dividir' contenido='Dividir' accion={dividirContador} />
          <Boton tipo='doble' contenido='Duplicar' accion={duplicarContador} />
          <Boton tipo='eliminar' contenido='Eliminar todos' accion={eliminarTodosLosContadores} />
        </div>
      </section>
    </main>
  );
};

export default Home;