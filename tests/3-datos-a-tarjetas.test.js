/*
 * G3 · Datos -> tarjetas: crearCard() y pintarRutas()
 * No modifiques este archivo: tu trabajo es hacer que pase.
 */
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { rutas } = require('../js/datos.js');
const { crearCard, pintarRutas, formatearPrecio } = require('../js/app.js');

const cocora = rutas.find((r) => r.id === 1);
const calleReal = rutas.find((r) => r.id === 6);

describe('G3 · crearCard(ruta)', () => {
  test('Devuelve un string', () => {
    assert.equal(typeof crearCard(cocora), 'string');
  });
  test('Envuelve la tarjeta en <div class="col"> y usa .card', () => {
    const html = crearCard(cocora);
    assert.match(html, /class="col"/);
    assert.match(html, /class="card[ "]/);
  });
  test('Muestra nombre, municipio y departamento', () => {
    const html = crearCard(cocora);
    assert.ok(html.includes('Valle de Cocora'));
    assert.ok(html.includes('Salento'));
    assert.ok(html.includes('Quindío'));
  });
  test('Muestra el precio formateado con formatearPrecio()', () => {
    assert.ok(crearCard(cocora).includes(formatearPrecio(25000)));
    assert.ok(crearCard(calleReal).includes('Gratis'));
  });
  test('Incluye la imagen con atributo alt', () => {
    assert.match(crearCard(cocora), /<img[^>]+src="img\/naturaleza\.svg"[^>]*alt=/);
  });
  test('Incluye el badge de la categoría (badge-<tipo>)', () => {
    assert.match(crearCard(cocora), /badge-naturaleza/);
  });
  test('El título de la tarjeta es un <h3>', () => {
    assert.match(crearCard(cocora), /<h3[^>]*>Valle de Cocora<\/h3>/);
  });
});

describe('G3 · pintarRutas(lista, contenedor, mensaje)', () => {
  const nuevoContenedor = () => ({ innerHTML: 'contenido viejo' });
  const nuevoMensaje = () => ({ textContent: '' });

  test('Pinta una tarjeta por cada ruta de la lista', () => {
    const c = nuevoContenedor();
    pintarRutas(rutas.slice(0, 3), c, nuevoMensaje());
    assert.equal((c.innerHTML.match(/class="col"/g) || []).length, 3);
  });
  test('Reemplaza el contenido anterior (no lo acumula)', () => {
    const c = nuevoContenedor();
    pintarRutas(rutas.slice(0, 2), c, nuevoMensaje());
    assert.ok(!c.innerHTML.includes('contenido viejo'));
  });
  test('El mensaje dice cuántas rutas hay', () => {
    const m = nuevoMensaje();
    pintarRutas(rutas.slice(0, 4), nuevoContenedor(), m);
    assert.match(m.textContent, /4/);
  });
  test('Con la lista vacía, el contenedor queda vacío y el mensaje avisa "No encontramos..."', () => {
    const c = nuevoContenedor(); const m = nuevoMensaje();
    pintarRutas([], c, m);
    assert.equal(c.innerHTML, '');
    assert.match(m.textContent, /No encontramos/);
  });
});
