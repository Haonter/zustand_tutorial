import React, { useRef } from 'react'
import useMyBearStore from './store'

const App: React.FC = () => {

  // Desestructuración del hook "useMyBearStore"
  const [
    bears,
    increasePopulation,
    increasePopulationIn,
    removeAllBears
  ] = [
    useMyBearStore((state) => state.bears),
    useMyBearStore((state) => state.increasePopulation),
    useMyBearStore((state) => state.increasePopulationInAmount),
    useMyBearStore((state) => state.removeAllBears)
  ]

  /*
    Tambien se puede extraer solo lo que se necesita del hook, por ejemplo:

    const bears = useMyBearStore((state) => state.bears);
    const increasePopulation = useMyBearStore((state) => state.increasePopulation);
  */

  const amountRef = useRef<HTMLInputElement>(null);
  const customIncreasePopulation = () => {
    const amount = +(amountRef.current as HTMLInputElement).value || 1;
    increasePopulationIn(amount);
  }

  return (
    <div style={{
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      marginTop: '2rem'
    }}>
      <h1>Osos: {bears}</h1>
      <button onClick={increasePopulation}>Agregar oso</button>

      <input type="number" name="amount" id="amount" ref={amountRef} />
      <button onClick={customIncreasePopulation}>Agregar osos</button>

      <button onClick={removeAllBears}>Eliminar todos</button>
    </div>
  )
}

export default App