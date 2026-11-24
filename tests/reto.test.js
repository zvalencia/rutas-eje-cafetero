/*
 * RETO · Escribe AQUÍ tus propias pruebas para ordenarRutas(lista, criterio).
 * Mínimo 5 casos (ver RETO.md). Usa el patrón Preparar, Ejecutar, Verificar.
 *
 * Ejemplo de la forma de una prueba (bórralo o adáptalo):
 *
 *   test('describe lo que debe pasar', () => {
 *     // Preparar
 *     const lista = rutas;
 *     // Ejecutar
 *     const resultado = ordenarRutas(lista, 'precio');
 *     // Verificar
 *     assert.equal(resultado[0].precio, 0);
 *   });
 */
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { rutas } = require('../js/datos.js');
const { ordenarRutas } = require('../js/app.js');

describe('RETO · ordenarRutas(lista, criterio)', () => {
  test('nombre: ordena de A a Z respetando tildes (Jardín antes que Mirador)', () => {
    // Preparar
    const lista = rutas;
    // Ejecutar
    const nombres = ordenarRutas(lista, 'nombre').map((r) => r.nombre);
    // Verificar
    const esperado = [...nombres].sort((a, b) => a.localeCompare(b, 'es'));
    assert.deepEqual(nombres, esperado);
    assert.equal(nombres[0], 'Ascenso al Nevado del Ruiz');
    assert.ok(nombres.indexOf('Jardín Botánico de Marsella') < nombres.indexOf('Mirador Colina Iluminada'));
  });

  test('precio: de menor a mayor y las rutas gratis van primero', () => {
    // Preparar
    const lista = rutas;
    // Ejecutar
    const precios = ordenarRutas(lista, 'precio').map((r) => r.precio);
    // Verificar
    assert.equal(precios[0], 0);
    assert.equal(precios[1], 0);
    assert.equal(precios[precios.length - 1], 150000);
    for (let i = 1; i < precios.length; i++) {
      assert.ok(precios[i - 1] <= precios[i], `Posición ${i}: ${precios[i - 1]} > ${precios[i]}`);
    }
  });

  test('duracion: de menor a mayor duración', () => {
    // Preparar
    const lista = rutas;
    // Ejecutar
    const horas = ordenarRutas(lista, 'duracion').map((r) => r.duracionHoras);
    // Verificar
    assert.equal(horas[0], 2);
    assert.equal(horas[horas.length - 1], 10);
    for (let i = 1; i < horas.length; i++) {
      assert.ok(horas[i - 1] <= horas[i], `Posición ${i}: ${horas[i - 1]} > ${horas[i]}`);
    }
  });

  test('no modifica la lista original ni devuelve la misma referencia', () => {
    // Preparar
    const lista = [...rutas];
    const idsAntes = lista.map((r) => r.id);
    // Ejecutar
    const resultado = ordenarRutas(lista, 'precio');
    // Verificar
    assert.deepEqual(lista.map((r) => r.id), idsAntes);
    assert.notEqual(resultado, lista);
    assert.equal(resultado.length, lista.length);
  });

  test('caso borde: criterio desconocido o vacío devuelve una copia en el mismo orden', () => {
    // Preparar
    const lista = [...rutas];
    // Ejecutar
    const vacio = ordenarRutas(lista, '');
    const raro = ordenarRutas(lista, 'color');
    // Verificar
    assert.deepEqual(vacio.map((r) => r.id), lista.map((r) => r.id));
    assert.deepEqual(raro.map((r) => r.id), lista.map((r) => r.id));
    assert.notEqual(vacio, lista);
  });

  test('caso borde: una lista vacía devuelve un arreglo vacío', () => {
    // Preparar
    const lista = [];
    // Ejecutar
    const resultado = ordenarRutas(lista, 'nombre');
    // Verificar
    assert.deepEqual(resultado, []);
  });

  test('funciona sobre una lista ya filtrada sin perder elementos', () => {
    // Preparar
    const cafe = rutas.filter((r) => r.tipo === 'cafe');
    // Ejecutar
    const resultado = ordenarRutas(cafe, 'precio');
    // Verificar
    assert.equal(resultado.length, cafe.length);
    assert.ok(resultado.every((r) => r.tipo === 'cafe'));
    assert.ok(resultado[0].precio <= resultado[1].precio);
  });
});
