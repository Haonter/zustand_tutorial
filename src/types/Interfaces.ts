export interface Personaje {
  _id: string
  nombre: string
  rol_en_el_juego: string
  descripcion: string
  biografia: string
  imagen: string
  id: number
  __v: number
}

export interface Paginacion {
  pagina_actual: number
  total_paginas: number
  total_elementos: number
  limite: number
  siguiente: string | null
  anterior: string | null
}

export interface ApiResponse {
  code: number
  paginacion: Paginacion
  personajes: Personaje[]
}