/*
 * G4 · filter() y eventos
 * No modifiques este archivo: tu trabajo es hacer que pase.
 */
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { rutas } = require('../js/datos.js');
const { filtrarPorTipo, buscarPorTexto } = require('../js/app.js');

const leer = (...p) => fs.readFileSync(path.join(__dirname, '..', ...p), 'utf8');
const nombres = (lista) => (lista || []).map((r) => r.nombre);

describe('G4 · filtrarPorTipo(lista, tipo)', () => {
  test('"cafe" devuelve solo las rutas de café', () => {
    const r = filtrarPorTipo(rutas, 'cafe');
    assert.equal(r.length, 2);
    assert.ok(r.every((x) => x.tipo === 'cafe'));
  });
  test('"todos" devuelve todas las rutas', () => {
    assert.equal(filtrarPorTipo(rutas, 'todos').length, rutas.length);
  });
  test('Un tipo que no existe devuelve []', () => {
    assert.deepEqual(filtrarPorTipo(rutas, 'playa'), []);
  });
  test('No modifica el arreglo original', () => {
    const antes = rutas.length;
    filtrarPorTipo(rutas, 'cultura');
    assert.equal(rutas.length, antes);
  });
});

describe('G4 · buscarPorTexto(lista, texto)', () => {
  test('Encuentra por municipio: "salento"', () => {
    assert.deepEqual(nombres(buscarPorTexto(rutas, 'salento')), ['Valle de Cocora', 'Calle Real de Salento']);
  });
  test('Ignora mayúsculas y tildes: "QUIMBAYA" y "catacion"', () => {
    assert.deepEqual(nombres(buscarPorTexto(rutas, 'QUIMBAYA')), ['Santuario Otún Quimbaya']);
    assert.deepEqual(nombres(buscarPorTexto(rutas, 'catacion')), ['Taller de catación']);
  });
  test('Texto vacío o solo espacios devuelve todas', () => {
    assert.equal(buscarPorTexto(rutas, '   ').length, rutas.length);
  });
  test('Sin coincidencias devuelve []', () => {
    assert.deepEqual(buscarPorTexto(rutas, 'cartagena'), []);
  });
});

describe('G4 · Eventos en la interfaz', () => {
  const app = leer('js', 'app.js').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
  const html = leer('index.html').replace(/<!--[\s\S]*?-->/g, '');

  test('Los botones de filtro escuchan el evento "click"', () => {
    assert.match(app, /addEventListener\(\s*['"]click['"]/);
  });
  test('El buscador escucha el evento "input"', () => {
    assert.match(app, /addEventListener\(\s*['"]input['"]/);
  });
  test('El botón activo actualiza aria-pressed', () => {
    assert.match(app, /setAttribute\(\s*['"]aria-pressed['"]/);
  });
  test('#resultado anuncia los cambios con aria-live="polite"', () => {
    const p = (html.match(/<[^>]*id="resultado"[^>]*>/) || [''])[0];
    assert.match(p, /aria-live="polite"/);
  });
});
