# RETO · Ordenar las rutas (5.0 puntos)

## Enunciado
La persona que visita el sitio quiere ordenar las rutas para planear su viaje.
Agrega un **selector "Ordenar por"** que funcione **junto con** los filtros y el buscador
(por ejemplo: solo rutas de *Naturaleza*, ordenadas por *precio*).

### 1. La función `ordenarRutas(lista, criterio)` en `js/app.js`
| criterio | resultado |
|---|---|
| `'nombre'` | A → Z, respetando tildes (pista: `a.nombre.localeCompare(b.nombre, 'es')`) |
| `'precio'` | de menor a mayor (las gratis primero) |
| `'duracion'` | de menor a mayor duración |
| cualquier otro valor (incluido `''`) | una **copia** de la lista en el mismo orden |

Regla de oro: **no modifica la lista original**. `sort()` sí modifica el arreglo
sobre el que se llama, así que primero haz una copia: `const copia = [...lista];`

### 2. Tus propias pruebas en `tests/reto.test.js`
Esta vez nadie te da las pruebas: **tú decides qué casos demuestran que tu función sirve.**
Escribe **mínimo 5 pruebas** con el patrón *Preparar, Ejecutar, Verificar*. Deben cubrir:
- los tres criterios (`nombre`, `precio`, `duracion`)
- que la lista original no cambia
- un caso borde (criterio desconocido o lista vacía)

### 3. La interfaz
- En `index.html`, en el lugar marcado `RETO`, agrega un `<select id="orden" class="form-select">`
  con su `<label for="orden">` y las opciones: Sin orden (`""`), Nombre, Precio, Duración.
- En `app.js`: agrega `orden: ''` al objeto `estado`, aplica `ordenarRutas()` dentro de
  `aplicarFiltros()` y escucha el evento **`change`** del select.

### 4. Demuestra que entiendes
Responde la sección **Reto** de `APRENDIZAJES.md`. Además, el instructor puede pedirte que expliques
en voz alta (2 minutos) cómo funciona tu `ordenarRutas` y qué demuestra cada una de tus pruebas.

### 5. GitHub
- Trabaja el reto en el **issue #5** y ciérralo con un commit que diga `closes #5`.
- El sitio actualizado debe verse en tu enlace de **GitHub Pages**.

## Dónde consultar
- MDN, Array.prototype.sort(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  Lee qué significa que la función de comparación devuelva un número negativo, cero o positivo, y si `sort()` modifica el arreglo.
- MDN, String.prototype.localeCompare(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
  Ordenar textos con tildes.
- MDN, Sintaxis extendida (spread): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  Copiar un arreglo con `[...lista]`.
- MDN, Evento change: https://developer.mozilla.org/es/docs/Web/API/HTMLElement/change_event
- Node.js, Test runner (`node:test`): https://nodejs.org/api/test.html y `assert`: https://nodejs.org/api/assert.html
  `test()`, `describe()`, `assert.equal`, `assert.deepEqual`.
- Mira las pruebas de `tests/3-datos-a-tarjetas.test.js` y `tests/4-filtros-y-eventos.test.js`: son ejemplos reales de cómo se escribe una prueba.

## Qué entregas
El enlace de tu repositorio `rutas-eje-cafetero` (con el enlace de Pages en el README).
`node --test` debe pasar completo: las pruebas guiadas **y** las tuyas.

## Rúbrica (5.0)
| Criterio | Puntos | Qué se revisa |
|---|---|---|
| Pruebas propias | 1.5 | ≥ 5 pruebas que pasan, cubren los 3 criterios, la inmutabilidad y un caso borde; se entiende qué verifica cada una |
| Implementación | 1.0 | `ordenarRutas` correcta, no muta la original, sin romper ninguna prueba guiada |
| Interfaz | 0.75 | Select con label accesible, evento `change`, se combina con filtro y buscador |
| GitHub | 0.75 | Issue #5 cerrado por commit, commits con mensajes claros, sitio publicado en Pages |
| Comprensión | 1.0 | `APRENDIZAJES.md` completo (G1 a G4 y reto) con respuestas en tus palabras y las fuentes consultadas; explicación oral si el instructor la pide |
