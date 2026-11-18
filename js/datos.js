/*
 * datos.js - Rutas del Eje
 * ------------------------------------------------------------
 * Los DATOS viven aquí, separados de la interfaz.
 * La página nunca escribe una tarjeta "a mano": app.js recorre
 * este arreglo y construye el HTML.
 *
 * Cada ruta es un OBJETO con las mismas propiedades.
 * Los precios son ficticios, solo para el ejercicio.
 * tipo ∈ 'naturaleza' | 'cultura' | 'cafe' | 'aventura'
 */
const rutas = [
  {
    id: 1,
    nombre: 'Valle de Cocora',
    municipio: 'Salento',
    departamento: 'Quindío',
    tipo: 'naturaleza',
    duracionHoras: 5,
    precio: 25000,
    descripcion: 'Caminata entre palmas de cera, el árbol nacional, con cruce de puentes colgantes.',
    imagen: 'img/naturaleza.svg'
  },
  {
    id: 2,
    nombre: 'Santuario Otún Quimbaya',
    municipio: 'Pereira',
    departamento: 'Risaralda',
    tipo: 'naturaleza',
    duracionHoras: 4,
    precio: 18000,
    descripcion: 'Bosque andino para avistar aves y monos aulladores con guía local.',
    imagen: 'img/naturaleza.svg'
  },
  {
    id: 3,
    nombre: 'Termales de Santa Rosa',
    municipio: 'Santa Rosa de Cabal',
    departamento: 'Risaralda',
    tipo: 'naturaleza',
    duracionHoras: 4,
    precio: 60000,
    descripcion: 'Piscinas de agua termal al pie de una cascada de más de 170 metros.',
    imagen: 'img/naturaleza.svg'
  },
  {
    id: 4,
    nombre: 'Recorrido por finca cafetera',
    municipio: 'Chinchiná',
    departamento: 'Caldas',
    tipo: 'cafe',
    duracionHoras: 3,
    precio: 45000,
    descripcion: 'Del cafetal a la taza: recolección, despulpado, secado y tostión.',
    imagen: 'img/cafe.svg'
  },
  {
    id: 5,
    nombre: 'Taller de catación',
    municipio: 'Pereira',
    departamento: 'Risaralda',
    tipo: 'cafe',
    duracionHoras: 2,
    precio: 35000,
    descripcion: 'Aprende a reconocer aromas, acidez y cuerpo en tres cafés de la región.',
    imagen: 'img/cafe.svg'
  },
  {
    id: 6,
    nombre: 'Calle Real de Salento',
    municipio: 'Salento',
    departamento: 'Quindío',
    tipo: 'cultura',
    duracionHoras: 2,
    precio: 0,
    descripcion: 'Casas de bahareque, balcones de colores y artesanías del Quindío.',
    imagen: 'img/cultura.svg'
  },
  {
    id: 7,
    nombre: 'Mirador Colina Iluminada',
    municipio: 'Filandia',
    departamento: 'Quindío',
    tipo: 'cultura',
    duracionHoras: 2,
    precio: 10000,
    descripcion: 'Torre de madera con vista a tres departamentos del Eje Cafetero.',
    imagen: 'img/cultura.svg'
  },
  {
    id: 8,
    nombre: 'Catedral y centro de Manizales',
    municipio: 'Manizales',
    departamento: 'Caldas',
    tipo: 'cultura',
    duracionHoras: 2,
    precio: 0,
    descripcion: 'Recorrido a pie por la plaza de Bolívar y la catedral basílica.',
    imagen: 'img/cultura.svg'
  },
  {
    id: 9,
    nombre: 'Parque del Café',
    municipio: 'Montenegro',
    departamento: 'Quindío',
    tipo: 'aventura',
    duracionHoras: 8,
    precio: 90000,
    descripcion: 'Atracciones mecánicas, teleférico y espectáculos sobre la cultura cafetera.',
    imagen: 'img/aventura.svg'
  },
  {
    id: 10,
    nombre: 'Ascenso al Nevado del Ruiz',
    municipio: 'Villamaría',
    departamento: 'Caldas',
    tipo: 'aventura',
    duracionHoras: 10,
    precio: 150000,
    descripcion: 'Excursión de alta montaña por el páramo, con guía certificado.',
    imagen: 'img/aventura.svg'
  },
  {
    id: 11,
    nombre: 'Jardín Botánico de Marsella',
    municipio: 'Marsella',
    departamento: 'Risaralda',
    tipo: 'naturaleza',
    duracionHoras: 2,
    precio: 8000,
    descripcion: 'Senderos entre guaduales y orquídeas en un pueblo de tradición cafetera.',
    imagen: 'img/naturaleza.svg'
  }
];

// Permite usar los datos en las pruebas con Node (en el navegador se ignora).
if (typeof module !== 'undefined') module.exports = { rutas };
