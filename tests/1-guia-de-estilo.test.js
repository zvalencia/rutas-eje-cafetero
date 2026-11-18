/*
 * G1 · Guía de estilo (css/estilos.css)
 * No modifiques este archivo: tu trabajo es hacer que pase.
 */
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'estilos.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, ''); // ignora comentarios

function variable(nombre) {
  const m = css.match(new RegExp(`${nombre}\\s*:\\s*([^;]+);`));
  return m ? m[1].trim() : null;
}

function bloque(selector) {
  const esc = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const m = css.match(new RegExp(`${esc}\\s*\\{([^}]*)\\}`));
  return m ? m[1] : '';
}

// Contraste WCAG entre dos colores hex de 6 dígitos
function luminancia(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contraste(a, b) {
  const [l1, l2] = [luminancia(a), luminancia(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}
const esHex = (v) => /^#[0-9a-fA-F]{6}$/.test(v || '');

describe('G1 · Guía de estilo con variables CSS', () => {
  for (const nombre of ['--eje-primario', '--eje-secundario', '--eje-fondo', '--eje-texto']) {
    test(`${nombre} está definido como color hex de 6 dígitos`, () => {
      assert.ok(esHex(variable(nombre)), `Define ${nombre}: #rrggbb; dentro de :root`);
    });
  }

  test('--eje-fuente está definida', () => {
    assert.ok(variable('--eje-fuente'), 'Define --eje-fuente con una pila de fuentes');
  });

  test('Contraste --eje-texto sobre --eje-fondo ≥ 4.5:1', () => {
    const t = variable('--eje-texto'); const f = variable('--eje-fondo');
    assert.ok(esHex(t) && esHex(f), 'Faltan --eje-texto o --eje-fondo');
    const c = contraste(t, f);
    assert.ok(c >= 4.5, `El contraste es ${c.toFixed(2)}:1, necesitas al menos 4.5:1`);
  });

  for (const nombre of ['--eje-primario', '--eje-secundario']) {
    test(`Texto blanco sobre ${nombre} tiene contraste ≥ 4.5:1`, () => {
      const v = variable(nombre);
      assert.ok(esHex(v), `Falta ${nombre}`);
      const c = contraste('#ffffff', v);
      assert.ok(c >= 4.5, `El contraste es ${c.toFixed(2)}:1, oscurece ${nombre}`);
    });
  }

  test('Bootstrap usa los tokens: --bs-body-color y --bs-body-font-family', () => {
    assert.match(css, /--bs-body-color\s*:\s*var\(--eje-texto\)/, 'Asigna --bs-body-color: var(--eje-texto);');
    assert.match(css, /--bs-body-font-family\s*:\s*var\(--eje-fuente\)/, 'Asigna --bs-body-font-family: var(--eje-fuente);');
  });

  test('.btn-outline-primary (filtros) usa --eje-primario', () => {
    const b = bloque('.btn-outline-primary');
    for (const prop of ['--bs-btn-color', '--bs-btn-border-color', '--bs-btn-hover-bg', '--bs-btn-active-bg']) {
      assert.match(b, new RegExp(`${prop}\\s*:\\s*var\\(--eje-primario\\)`), `En .btn-outline-primary asigna ${prop}: var(--eje-primario);`);
    }
  });
});
