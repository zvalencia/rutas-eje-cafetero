/*
 * G2 · Componentes de Bootstrap en index.html (navbar + btn-group)
 * No modifiques este archivo: tu trabajo es hacer que pase.
 */
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8')
  .replace(/<!--[\s\S]*?-->/g, ''); // ignora comentarios

const etiquetas = (nombre) => html.match(new RegExp(`<${nombre}\\b[^>]*>`, 'g')) || [];

describe('G2 · Navbar con collapse', () => {
  const toggler = etiquetas('button').find((b) => b.includes('navbar-toggler'));

  test('Existe un botón .navbar-toggler', () => {
    assert.ok(toggler, 'Agrega <button class="navbar-toggler" ...> dentro del nav');
  });
  test('El toggler abre el collapse #menu', () => {
    assert.match(toggler || '', /data-bs-toggle="collapse"/);
    assert.match(toggler || '', /data-bs-target="#menu"/);
  });
  test('El toggler es accesible (aria-controls, aria-expanded, aria-label)', () => {
    assert.match(toggler || '', /aria-controls="menu"/);
    assert.match(toggler || '', /aria-expanded="false"/);
    assert.match(toggler || '', /aria-label="[^"]+"/);
  });
  test('Existe <div class="collapse navbar-collapse" id="menu"> con ul.navbar-nav', () => {
    const div = etiquetas('div').find((d) => /id="menu"/.test(d));
    assert.ok(div && /collapse/.test(div) && /navbar-collapse/.test(div), 'Falta el div#menu con clases collapse navbar-collapse');
    assert.match(html, /class="navbar-nav[^"]*"/, 'Falta la lista ul.navbar-nav');
  });
});

describe('G2 · Botones de filtro (btn-group)', () => {
  const botones = etiquetas('button').filter((b) => /data-tipo="/.test(b));
  const tipos = botones.map((b) => b.match(/data-tipo="([^"]+)"/)[1]);

  test('El grupo tiene role="group" y aria-label', () => {
    const grupo = etiquetas('div').find((d) => /btn-group/.test(d));
    assert.ok(grupo, 'Falta el div.btn-group');
    assert.match(grupo, /role="group"/);
    assert.match(grupo, /aria-label="[^"]+"/);
  });
  test('Hay un botón por tipo: todos, naturaleza, cultura, cafe, aventura', () => {
    for (const t of ['todos', 'naturaleza', 'cultura', 'cafe', 'aventura']) {
      assert.ok(tipos.includes(t), `Falta el botón con data-tipo="${t}"`);
    }
  });
  test('Cada botón de filtro es type="button" y tiene aria-pressed', () => {
    assert.ok(botones.length >= 5);
    for (const b of botones) {
      assert.match(b, /type="button"/, `Le falta type="button" a: ${b}`);
      assert.match(b, /aria-pressed="(true|false)"/, `Le falta aria-pressed a: ${b}`);
    }
  });
});
