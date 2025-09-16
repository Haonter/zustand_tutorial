import Navbar from '@/components/Navbar/Navbar';
import Personajes from '@/components/Personajes/Personajes';
import PersonajeDetalle from '@/components/PersonajeDetalle/PersonajeDetalle';
import Favoritos from '@/components/Favoritos/Favoritos';
import styles from '@/styles/styles';

/*
  ¿Qué se ha logrado al usar Zustand?

  1. evitar prop drilling
    - No se necesita pasar props a través de múltiples niveles de componentes.
    - Cualquier componente puede acceder directamente al estado que necesita.

  2. Reducir boilerplate
    - Una sola función create() para definir todo el store.
    - No se necesitan actions, reducers ni dispatchers separados (como en Redux).
    - Integración fluida con TypeScript.

  3. Estado compartido eficiente
    - Los componentes Personajes, PersonajeDetalle y Favoritos comparten el mismo estado.
    - Actualizar el estado provoca re-render solo en los componentes que lo usan.
    - Comunicación entre componentes hermanos sin levantar el estado.

  4. Funcionalidades avanzadas
    - Persistencia automática (localStorage) para favoritos.
    - Integración con DevTools (Redux DevTools) para debugging.
    - Optimización: solo se re-renderiza lo necesario.

  5. Gestión de estado reactiva
    - Cambios en tiempo real entre componentes.
    - Manejo centralizado de loading y errores.
    - Estado predecible y fácil de debuggear.

  Este ejemplo muestra cómo Zustand elimina el prop drilling y reduce significativamente
  el boilerplate comparado con useState + Context API o Redux tradicional.
*/

const Advanced = () => {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.advanced.contentContainer}>
        <Personajes />

        <aside className={styles.advanced.aside}>
          <PersonajeDetalle />
          <Favoritos />
        </aside>
      </section>
    </main>
  );
};

export default Advanced;