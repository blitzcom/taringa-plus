import React from 'react'

import './Icon.css'

const iconsMap = {
  privado: { x: -3, y: 0 },
  juegos: { x: 0, y: -44 },
  imagenes: { x: 0, y: -64 },
  links: { x: 0, y: -88 },
  videos: { x: 0, y: -110 },
  arte: { x: 0, y: -132 },
  offtopic: { x: 0, y: -154 },
  animaciones: { x: 0, y: -174 },
  musica: { x: 0, y: -198 },
  downloads: { x: 0, y: -217 },
  noticias: { x: 0, y: -242 },
  info: { x: 0, y: -243 },
  'tv-peliculas-series': { x: 0, y: -305 },
  patrocinados: { x: 0, y: -332 },
  poringueras: { x: 0, y: -418 },
  gay: { x: 0, y: -507 },
  relatos: { x: 0, y: -528 },
  linux: { x: 0, y: -547 },
  deportes: { x: 0, y: -572 },
  celulares: { x: 0, y: -593 },
  'apuntes-y-monografias': { x: 0, y: -616 },
  comics: { x: 0, y: -637 },
  solidaridad: { x: 0, y: -661 },
  'recetas-y-cocina': { x: 0, y: -680 },
  mac: { x: 0, y: -702 },
  femme: { x: 0, y: -724 },
  'autos-motos': { x: 0, y: -744 },
  humor: { x: 0, y: -769 },
  'ebooks-tutoriales': { x: 0, y: -791 },
  'salud-bienestar': { x: 0, y: -811 },
  taringa: { x: 0, y: -440 },
  'economia-negocios': { x: 0, y: -849 },
  mascotas: { x: 0, y: -866 },
  turismo: { x: 0, y: -890 },
  'manga-anime': { x: 0, y: -912 },
  'ciencia-educacion': { x: 0, y: -961 },
  'hazlo-tu-mismo': { x: 0, y: -935 },
  ecologia: { x: 0, y: -459 },
}

const Icon = (props) => {
  const icon = iconsMap[props.icon] || iconsMap['taringa']

  const style = {
    backgroundPosition: `${icon.x}px ${icon.y}px`
  }

  return (
    <i className='taringa-icon' {...props} style={style}/>
  )
}

export default Icon
