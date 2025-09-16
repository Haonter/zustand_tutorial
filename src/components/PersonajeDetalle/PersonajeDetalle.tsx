// components/PersonajeDetalle/PersonajeDetalle.tsx
import React from 'react';
import { usePersonajesStore } from '@/stores/advancedStore';

const PersonajeDetalle: React.FC = () => {
  const {
    personajeSeleccionado,
    favoritos,
    setPersonajeSeleccionado,
    toggleFavorito
  } = usePersonajesStore();

  if (!personajeSeleccionado) {
    return (
      <div className="personaje-detalle-placeholder">
        <p>Selecciona un personaje para ver sus detalles</p>
      </div>
    );
  }

  const esFavorito = favoritos.includes(personajeSeleccionado._id);

  return (
    <div className="personaje-detalle">
      <div className="detalle-header">
        <button
          onClick={() => setPersonajeSeleccionado(null)}
          className="btn-cerrar"
        >
          ✕ Cerrar
        </button>

        <button
          onClick={() => toggleFavorito(personajeSeleccionado._id)}
          className={`btn-favorito-detalle ${esFavorito ? 'favorito' : ''}`}
        >
          {esFavorito ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos'}
        </button>
      </div>

      <div className="detalle-content">
        <img
          src={personajeSeleccionado.imagen}
          alt={personajeSeleccionado.nombre}
          className="detalle-imagen"
        />

        <div className="detalle-info">
          <h2>{personajeSeleccionado.nombre}</h2>
          <p className="rol-detalle">{personajeSeleccionado.rol_en_el_juego}</p>

          <div className="descripcion-section">
            <h3>Descripción</h3>
            <p>{personajeSeleccionado.descripcion}</p>
          </div>

          <div className="biografia-section">
            <h3>Biografía</h3>
            <p>{personajeSeleccionado.biografia}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonajeDetalle;