/**
 * ¿Qué es Zustand?
 * - Es una librería para manejar el estado en aplicaciones de React de manera sencilla y eficiente.
 *
 * ¿Que son estados?
 * - Son objetos (valores) que representan la información que puede cambiar en tu aplicación, esta informacion comunmente se comparte entre componentes,
 *   de manera que cada componente puede acceder, reaccionar y modificar el estado según sea necesario.
 *
 * ¿Cómo funciona?
 * - Zustand crea un "store" centralizado donde puedes definir estados (valores) y las funciones para modificarlos (setters).
 *   Se pueden crear múltiples stores según sea necesario para la aplicación, y cada uno puede ser tan simple o complejo como requiera la lógica de negocio.
 * - Los componentes pueden acceder y modificar el estado usando hooks personalizados.
 *   Los hooks personalizados son funciones que permiten a los componentes leer y actualizar el estado del store de manera reactiva.
 * - El estado se actualiza de forma reactiva y eficiente, evitando renders innecesarios.
 *   La reactividad significa que los componentes se actualizan automáticamente cuando el estado cambia, y Zustand optimiza para que solo los componentes afectados se rendericen.
 * - No requiere boilerplate (código repetitivo) ni reducers (funciones para manejar cambios de estado) como Redux, lo que facilita su uso y mantenimiento.
 *   Boilerplate es código repetitivo y necesario en otras librerías como Redux; los reducers son funciones para manejar cambios de estado. Zustand elimina la necesidad de ambos, simplificando la gestión de estado.
 *
 *   Por ejemplo, imagina que el "store" de Zustand es como una biblioteca:
 *   Los libros representan el estado global (los datos que pueden cambiar) y los lectores (componentes) pueden entrar a la biblioteca y consultar los libros que les interesan (acceder al estado).
 *   Si un libro se actualiza o se publica uno nuevo (cambio de estado), solo los lectores que están interesados en ese libro se enteran y pueden volver a consultarlo (los componentes se actualizan automáticamente).
 *   Los lectores también pueden pedir que se agregue, modifique o elimine un libro (los componentes pueden modificar el estado usando funciones/setters del store).
 *   Así, la biblioteca mantiene la información organizada y accesible para todos, sin que cada lector tenga que llevarse copias o preguntar constantemente por cambios.
 *
 * ¿Como se usa Zustand?
 *  - Se puede usar mediante hooks personalizados (custom hooks) que permiten acceder y modificar el estado del store.
 *    Estos hooks se pueden crear utilizando la función `create` de Zustand, que permite definir el estado y las acciones (setters) en un solo lugar.
 *  - En cada componente se puede usar el hook personalizado para acceder y modificar el estado sin necesidad de prop drilling (pasar props a través de múltiples niveles de componentes).
 *
 * Glosario:
 *  - Zustand: Librería para manejar el estado en aplicaciones de React.
 *  - Store: Contenedor centralizado de estado y lógica de negocio.
 *  - Estado: Información que puede cambiar en la aplicación.
 *  - Un Hook es una función especial en React que permite a los componentes usar funcionalidades como el estado (useState) y el ciclo de vida (useEffect),
 *    que antes solo estaban disponibles en componentes de clase.
 *  - Hook Personalizado (Custom Hook): Es una función que empieza con el prefijo "use" y usa otros Hooks. Su objetivo es reutilizar lógica entre componentes, encapsulando código complejo.
 *  - Prop Drilling: Es una técnica que consiste en pasar propiedades (props/params) a través de múltiples niveles de componentes, desde un componente padre hacia sus componentes hijos,
 *    esto puede hacer que el código sea más difícil de mantener a medida que la aplicación crece.
 *  - Redux: Librería para manejar el estado en aplicaciones de React, más compleja y con más boilerplate.
 *  - Boilerplate: Código repetitivo y necesario.
 *  - Reducers: Funciones que permiten manejar cambios de estado de manera predecible en Redux.
 */

import { create } from 'zustand';

interface ContadorState {
  contador: number
  incrementarContador: () => void
  incrementarContadorEnCantidad: (amount: number) => void
  duplicarContador: () => void
  dividirContador: () => void
  eliminarTodosLosContadores: () => void
  actualizarContador: (nuevoValor: number) => void
}

/**
 * @file store.ts
 * @hook useMycontadorStore
 * @description Store de Zustand para gestionar el estado del contador y las acciones relacionadas.
 * @param {ContadorState} state - El objeto de estado que contiene el contador y las acciones.
 * @param {Function} set - La función para actualizar el estado.
 * @param {number} state.contador - El número actual del contador
 * @param {Function} state.incrementarContador - Función para aumentar el contador en 1.
 * @param {Function} state.incrementarContadorEnCantidad - Función para aumentar el contador en una cantidad específica.
 * @param {Function} state.duplicarContador - Función para duplicar el contador.
 * @param {Function} state.dividirContador - Función para dividir el contador a la mitad.
 * @param {Function} state.eliminarTodosLosContadores - Función para eliminar todos los contadores.
 * @param {Function} state.actualizarContador - Función para actualizar el número del contador.
 * @example
 *
 *  // Uso básico
 *  const contador = useMyCounterStore((state) => state.contador);
 *  const increaseContador = useMyCounterStore((state) => state.increaseContador);
 *  const incrementarContadorEnCantidad = useMyCounterStore((state) => state.incrementarContadorEnCantidad);
 *  const duplicarContador = useMyCounterStore((state) => state.duplicarContador);
 *  const dividirContador = useMyCounterStore((state) => state.dividirContador);
 */
const useMyCounterStore = create<ContadorState>((set) => ({
  // PD: Crea un hook con ☝🏻😎 create, y especificar la interfaz, Ej. create<InterfazDeseada>

  // Estado inicial
  contador: 0,

  // Acciones o Setters
  incrementarContador: () => set((state) => ({ contador: state.contador + 1 })),
  incrementarContadorEnCantidad: (amount) => set((state) => ({ contador: state.contador + amount })),
  duplicarContador: () => set((state) => ({ contador: state.contador * 2 })),
  dividirContador: () => set((state) => ({ contador: Math.floor(state.contador / 2) })),
  eliminarTodosLosContadores: () => set({ contador: 0 }),
  actualizarContador: (nuevoValor) => set({ contador: nuevoValor }),
}));

export default useMyCounterStore;