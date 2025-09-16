// components/Personajes/Personajes.tsx
import React, { useEffect } from 'react';
import { usePersonajesStore } from '@/stores/advancedStore';

const Personajes: React.FC = () => {
  const {
    personajes,
    loading,
    error,
    paginaActual,
    totalPaginas,
    favoritos,
    fetchPersonajes,
    setPersonajeSeleccionado,
    toggleFavorito,
    clearError,
  } = usePersonajesStore();

  useEffect(() => {
    fetchPersonajes();
  }, [fetchPersonajes]);

  const handlePageChange = (newPage: number) => {
    fetchPersonajes(newPage);
  };

  const handlePersonajeClick = (personaje: any) => {
    setPersonajeSeleccionado(personaje);
  };

  if (loading) return <div className="loading">Cargando personajes...</div>;

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
        <button onClick={clearError}>Cerrar</button>
      </div>
    );
  }

  return (
    <section className="personajes-container">
      <h2>Personajes de Halo</h2>

      <div className="personajes-grid">
        {personajes.map((personaje) => (
          <div key={personaje._id} className="personaje-card">
            <img
              src={personaje.imagen}
              alt={personaje.nombre}
              className="personaje-imagen"
            />
            <h3>{personaje.nombre}</h3>
            <p className="rol">{personaje.rol_en_el_juego}</p>
            <p className="descripcion">{personaje.descripcion}</p>

            <div className="personaje-actions">
              <button
                onClick={() => handlePersonajeClick(personaje)}
                className="btn-ver-detalle"
              >
                Ver Detalle
              </button>

              <button
                onClick={() => toggleFavorito(personaje._id)}
                className={`btn-favorito ${favoritos.includes(personaje._id) ? 'favorito' : ''}`}
              >
                {favoritos.includes(personaje._id) ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>

        <span className="page-info">
          Página {paginaActual} de {totalPaginas}
        </span>

        <button
          onClick={() => handlePageChange(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default Personajes;