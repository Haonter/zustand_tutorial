// components/Favoritos/Favoritos.tsx
import React from 'react';
import { usePersonajesStore } from '@/stores/advancedStore';

const Favoritos: React.FC = () => {
  const {
    personajes,
    favoritos,
    toggleFavorito,
    setPersonajeSeleccionado
  } = usePersonajesStore();

  const personajesFavoritos = personajes.filter(p => favoritos.includes(p._id));

  return (
    <div className="favoritos-section">
      <h3>Mis Favoritos ({favoritos.length})</h3>

      {favoritos.length === 0 ? (
        <p>No tienes personajes favoritos aún</p>
      ) : (
        <div className="favoritos-list">
          {personajesFavoritos.map((personaje) => (
            <div key={personaje._id} className="favorito-item">
              <img
                src={personaje.imagen}
                alt={personaje.nombre}
                className="favorito-imagen"
              />
              <span className="favorito-nombre">{personaje.nombre}</span>

              <div className="favorito-actions">
                <button
                  onClick={() => setPersonajeSeleccionado(personaje)}
                  className="btn-ver"
                >
                  Ver
                </button>
                <button
                  onClick={() => toggleFavorito(personaje._id)}
                  className="btn-quitar"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;