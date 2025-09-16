import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ApiResponse, Personaje } from '@/types/Interfaces';

interface PersonajesState {
  // Estado
  personajes: Personaje[];
  loading: boolean;
  error: string | null;
  paginaActual: number;
  totalPaginas: number;
  limite: number;

  // Estados adicionales para demostrar más funcionalidades
  personajeSeleccionado: Personaje | null;
  favoritos: string[]; // IDs de personajes favoritos

  // Acciones
  fetchPersonajes: (page?: number, limit?: number) => Promise<void>;
  setPersonajeSeleccionado: (personaje: Personaje | null) => void;
  toggleFavorito: (personajeId: string) => void;
  clearError: () => void;
  reset: () => void;
}

const initialState = {
  personajes: [],
  loading: false,
  error: null,
  paginaActual: 1,
  totalPaginas: 1,
  limite: 3,
  personajeSeleccionado: null,
  favoritos: [],
};

export const usePersonajesStore = create<PersonajesState>()(
  persist(
    (set, get) => ({
      ...initialState,

      fetchPersonajes: async (page = 1, limit = 3) => {
        set({ loading: true, error: null });

        try {
          const response = await axios.get<ApiResponse>(
            `https://api-halo-base.onrender.com/personajes?page=${page}&limit=${limit}`
          );

          const { personajes, paginacion } = response.data;

          set({
            personajes,
            paginaActual: paginacion.pagina_actual,
            totalPaginas: paginacion.total_paginas,
            limite: paginacion.limite,
            loading: false,
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Error desconocido',
            loading: false,
          });
        }
      },

      setPersonajeSeleccionado: (personaje) => {
        set({ personajeSeleccionado: personaje });
      },

      toggleFavorito: (personajeId) => {
        const { favoritos } = get();
        const nuevosFavoritos = favoritos.includes(personajeId)
          ? favoritos.filter(id => id !== personajeId)
          : [...favoritos, personajeId];

        set({ favoritos: nuevosFavoritos });
      },

      clearError: () => {
        set({ error: null });
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'personajes-storage', // Persistir favoritos en localStorage
      partialize: (state) => ({ favoritos: state.favoritos }), // Solo persistir favoritos
    }
  )
);