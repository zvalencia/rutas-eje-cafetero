/*
 * app.js - Rutas del Eje
 * ------------------------------------------------------------
 * Flujo de la interfaz: DATOS (datos.js) -> TARJETAS (HTML) -> EVENTOS
 *
 *   rutas -> filtrarPorTipo() -> buscarPorTexto() -> pintarRutas() -> #lista-rutas
 *
 * Los eventos (clic en un filtro, escribir en el buscador) cambian el estado
 * y vuelven a ejecutar ese recorrido.
 *
 * Los comentarios REPASO te recuerdan el JS básico justo donde lo vas a usar.
 * Verifica tu avance con:  node --test
 */

const ETIQUETAS_TIPO = {
  naturaleza: 'Naturaleza',
  cultura: 'Cultura',
  cafe: 'Café',
  aventura: 'Aventura'
};

/* ============================================================
 * RESUELTA 1 · formatearPrecio(valor)
 * Convierte 25000 en "$ 25.000". Si el precio es 0, devuelve "Gratis".
 * ============================================================ */
function formatearPrecio(valor) {
  if (valor === 0) return 'Gratis';
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(valor);
}

/* ============================================================
 * RESUELTA 2 · normalizar(texto)
 * Minúsculas, sin tildes y sin espacios a los lados,
 * para que "CAFÉ " y "cafe" se consideren iguales al buscar.
 * ============================================================ */
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim();
}

/* ============================================================
 * TODO G3.1 · crearCard(ruta) -> string con el HTML de UNA tarjeta
 *
 * REPASO: Objetos
 *    ruta es un objeto: ruta.nombre -> 'Valle de Cocora', ruta.precio -> 25000
 *
 * REPASO: Template literals (comillas invertidas ` `)
 *    const saludo = `Hola, ${persona.nombre}`;   // ${ } inserta un valor
 *    Pueden ocupar varias líneas: perfectos para HTML.
 *
 * Consulta: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
 * Antes de escribir: en la consola prueba `Hola, ${rutas[0].nombre}` (con comillas
 *    invertidas) y luego con comillas simples. ¿Qué cambia? -> APRENDIZAJES.md #3
 *
 * Pasos:
 *   1. Copia la TARJETA MODELO que está comentada en index.html.
 *   2. Pégala dentro de: return ` ... `;
 *   3. Cambia cada dato fijo por ${ruta.propiedad}:
 *      imagen, tipo (clase badge-${ruta.tipo}), ETIQUETAS_TIPO[ruta.tipo],
 *      nombre, municipio, departamento, descripcion, duracionHoras
 *      y el precio con ${formatearPrecio(ruta.precio)}
 * ============================================================ */
function crearCard(ruta) {
  // TODO: implementar
}

/* ============================================================
 * TODO G3.2 · pintarRutas(lista, contenedor, mensaje)
 *
 * REPASO: map() transforma CADA elemento y devuelve un arreglo nuevo
 *    [1, 2, 3].map((n) => n * 2)          // [2, 4, 6]
 *    rutas.map(crearCard)                 // ['<div…>', '<div…>', …]
 *    ['<a>', '<b>'].join('')              // '<a><b>'  (une el arreglo en un texto)
 *
 * REPASO: if / else y .length
 *    if (lista.length === 0) { … } else { … }
 *
 * Consulta: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *             https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *             https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
 * Antes de escribir: llena la tabla de predicciones de APRENDIZAJES.md #3
 *
 * Pasos:
 *   1. contenedor.innerHTML = (todas las tarjetas unidas en un solo string)
 *   2. Si la lista está vacía:
 *        mensaje.textContent = 'No encontramos rutas con ese filtro. Prueba con otra búsqueda.'
 *      Si no:
 *        mensaje.textContent = `${lista.length} rutas encontradas`
 * ============================================================ */
function pintarRutas(lista, contenedor, mensaje) {
  // TODO: implementar
}

/* ============================================================
 * TODO G4.1 · filtrarPorTipo(lista, tipo) -> nuevo arreglo
 *
 * REPASO: Funciones flecha
 *    function esPar(n) { return n % 2 === 0; }
 *    const esPar = (n) => n % 2 === 0;      // misma función, más corta
 *
 * REPASO: filter() se queda con los elementos que cumplen la condición
 *    [5, 12, 8].filter((n) => n > 6)       // [12, 8]
 *    NO modifica el arreglo original: devuelve uno nuevo.
 *
 * Consulta: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *             https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 *
 * Reglas:
 *   - Si tipo es 'todos' -> devuelve una copia de toda la lista:  return [...lista];
 *   - Si no -> solo las rutas cuyo ruta.tipo sea igual a tipo.
 * ============================================================ */
function filtrarPorTipo(lista, tipo) {
  // TODO: implementar
}

/* ============================================================
 * TODO G4.2 · buscarPorTexto(lista, texto) -> nuevo arreglo
 *
 * REPASO: includes() y el operador || (o)
 *    'pereira'.includes('rei')             // true
 *    condicionA || condicionB              // true si se cumple al menos una
 *
 * Consulta: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * Antes de escribir: en la consola, ¿qué devuelve normalizar('  Catación ')?
 *
 * Reglas:
 *   - Normaliza el texto buscado con normalizar().
 *   - Si queda vacío ('') -> devuelve una copia de toda la lista.
 *   - Si no -> las rutas cuyo nombre O municipio (normalizados) incluyan el texto.
 * ============================================================ */
function buscarPorTexto(lista, texto) {
  // TODO: implementar
}

/* ============================================================
 * RETO · ordenarRutas(lista, criterio) -> nuevo arreglo ordenado
 * Enunciado completo, rúbrica y enlaces de consulta en RETO.md.
 * Tus pruebas van en tests/reto.test.js.
 * ============================================================ */
function ordenarRutas(lista, criterio) {
  // TODO: implementar (RETO)
}

/* ============================================================
 * Estado de la interfaz + aplicarFiltros()  (ya resuelto)
 * El estado guarda qué eligió la persona. Cada evento cambia el
 * estado y vuelve a pintar todo desde los DATOS.
 * ============================================================ */
const estado = { tipo: 'todos', texto: '' };

function aplicarFiltros() {
  // ?? rutas -> mientras una función no esté implementada (devuelve undefined), se usan todas las rutas
  let resultado = filtrarPorTipo(rutas, estado.tipo) ?? rutas;
  resultado = buscarPorTexto(resultado, estado.texto) ?? resultado;
  // RETO: aquí también se aplica ordenarRutas(resultado, estado.orden)
  pintarRutas(resultado, document.querySelector('#lista-rutas'), document.querySelector('#resultado'));
}

/* ============================================================
 * TODO G4.3 · iniciar() - conecta los EVENTOS
 *
 * REPASO: Eventos
 *    elemento.addEventListener('click', () => { … });   // al hacer clic
 *    input.addEventListener('input', (evento) => {        // cada vez que se escribe
 *      console.log(evento.target.value);                  // lo que hay escrito
 *    });
 *    boton.dataset.tipo   // lee el atributo data-tipo="…" del HTML
 *
 * Consulta: https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
 *             https://developer.mozilla.org/es/docs/Web/API/Element/input_event
 *             https://developer.mozilla.org/es/docs/Web/API/HTMLElement/dataset
 *             https://es.javascript.info/introduction-browser-events
 * Empieza con un console.log('clic', boton.dataset.tipo) dentro del listener
 *    para VER el evento antes de filtrar.
 *
 * Pasos:
 *   1. Por cada botón de filtro, escucha 'click':
 *        - estado.tipo = boton.dataset.tipo;
 *        - recorre TODOS los botones: al clicado ponle la clase active y
 *          aria-pressed="true"; a los demás quítasela y aria-pressed="false"
 *          (pista: b.classList.toggle('active', b === boton) y b.setAttribute('aria-pressed', …))
 *        - aplicarFiltros();
 *   2. En #buscador escucha 'input':
 *        - estado.texto = evento.target.value;
 *        - aplicarFiltros();
 * ============================================================ */
function iniciar() {
  const botones = document.querySelectorAll('[data-tipo]');

  // TODO G4.3 - paso 1: eventos 'click' de los botones

  // TODO G4.3 - paso 2: evento 'input' del buscador

  aplicarFiltros(); // pinta todas las rutas al cargar
}

// En el navegador arranca la app; en Node (pruebas) exporta las funciones.
if (typeof document !== 'undefined') iniciar();
if (typeof module !== 'undefined') {
  module.exports = { formatearPrecio, normalizar, crearCard, pintarRutas, filtrarPorTipo, buscarPorTexto, ordenarRutas };
}
