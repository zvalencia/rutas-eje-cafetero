# Mis aprendizajes · Rutas del Eje

> Las pruebas automáticas dicen si tu código **funciona**. Este archivo muestra si **entiendes por qué funciona**.
> Responde con tus palabras, en 2 a 5 líneas por pregunta. No copies la documentación: explícala.
> En cada issue anota también **qué consultaste** (enlace) y **qué encontraste ahí**.
>
> Este archivo forma parte de la calificación del reto (criterio *Comprensión*).

**Aprendiz:** Yeison Valencia Zapata

---

## Issue #1 · G1 Guía de estilo

**Consulté:**
- MDN, variables CSS (https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties) → se declaran con `--nombre` en `:root` y se leen con `var(--nombre)`.
- Bootstrap, CSS variables (https://getbootstrap.com/docs/5.3/customize/css-variables/) → las variables globales `--bs-body-color`, `--bs-body-font-family`, etc.
- Bootstrap, Buttons (https://getbootstrap.com/docs/5.3/components/buttons/#variables) → cada botón lee sus propias `--bs-btn-*`.
- WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/) → el mínimo AA para texto normal es 4.5:1; mis colores dan 7.62:1 (primario), 13.67:1 (secundario) y 14.61:1 (texto sobre fondo).

1. **Explica:** ¿qué ventaja tiene escribir los colores como variables en `:root` en vez de escribir el hex directamente en cada regla?
   La ventaja es que cada color se escribe una sola vez y todo el sitio lo reutiliza con `var(--...)`. Si quiero cambiar el verde de la marca, edito una línea en `:root` y cambian botones, precios y degradado a la vez, en vez de buscar el hex en cada regla y arriesgarme a olvidar alguna. También evita colores "sueltos" que se vean distintos entre sí.

2. **Experimenta y explica:** en DevTools selecciona el botón "Ver rutas", pestaña *Computed* (o *Calculado*) y busca `--bs-btn-bg`. ¿De dónde sale su valor? ¿Por qué cambiar `--bs-primary` no habría cambiado el color del botón?
   El valor de `--bs-btn-bg` lo define la regla `.btn-primary` de Bootstrap y, como mi `estilos.css` se carga después, mi regla `.btn-primary` lo sobrescribe con `var(--eje-primario)`. `--bs-primary` no bastaría porque el botón no lee esa variable: lee `--bs-btn-bg`, `--bs-btn-border-color`, etc., que Bootstrap define dentro del propio componente. Hay que sobrescribir las variables del componente. (Esta explicación sale de la documentación de Bootstrap; no la verifiqué mirando DevTools.)

3. **¿Qué pasaría si…** enlazas `estilos.css` ANTES de `bootstrap.min.css` en el `<head>`? Pruébalo, describe lo que ves y vuelve a dejarlo como estaba.
   Según la cascada de CSS, si dos reglas tienen la misma especificidad gana la que aparece después. Si `estilos.css` va antes de Bootstrap, las reglas `.btn-primary` y `.btn-outline-primary` de Bootstrap vuelven a ganar y mis valores se pierden: los botones recuperarían el azul por defecto. Por eso mi CSS se enlaza después de Bootstrap y así lo dejé. (Descripción basada en la cascada; no hice la prueba visual en el navegador.)

---

## Issue #2 · G2 Componentes

**Consulté:**
- Bootstrap, Navbar, Responsive behaviors (https://getbootstrap.com/docs/5.3/components/navbar/#responsive-behaviors) → la estructura `navbar-toggler` + `collapse navbar-collapse` y los atributos `data-bs-*`.
- Bootstrap, Button group (https://getbootstrap.com/docs/5.3/components/button-group/) → el grupo lleva `role="group"` y `aria-label` para que el lector de pantalla lo anuncie como conjunto.
- MDN, aria-pressed (https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) → define un botón de alternar; valores `true`/`false`.
- MDN, atributos data-* (https://developer.mozilla.org/es/docs/Web/HTML/Global_attributes/data-*) → permiten guardar datos propios en el HTML, legibles desde JS con `dataset`.

1. **Explica:** ¿qué relación hay entre `data-bs-target="#menu"` en el botón y el `id="menu"` del div? ¿Quién lee ese atributo?
   `data-bs-target="#menu"` es un selector CSS que apunta al elemento con `id="menu"`; si el id no coincide, el botón no sabe qué abrir. Lo lee el JavaScript de Bootstrap (`bootstrap.bundle.min.js`), que al hacer clic en un elemento con `data-bs-toggle="collapse"` busca el destino con ese selector y lo muestra u oculta.

2. **Experimenta:** abre y cierra el menú en un ancho de celular y observa en DevTools el atributo `aria-expanded` del botón. ¿Qué pasa con su valor? ¿Para quién es útil esa información?
   Según la documentación, el JavaScript de Bootstrap alterna `aria-expanded` entre `false` (menú cerrado) y `true` (abierto) en cada clic. Esa información es para las tecnologías de apoyo: el lector de pantalla anuncia al usuario si el menú está desplegado o plegado, algo que una persona sin visión no puede ver. Si cambio `data-bs-target` a `#otro`, no existe un elemento con ese id y el botón dejaría de abrir el menú. (Basado en la documentación; no hice la prueba en DevTools.)

3. **¿Qué pasaría si…** en un botón de filtro escribes `data-tipo="café"` (con tilde)? Piensa en lo que hay en `datos.js` antes de responder.
   En `datos.js` el campo `tipo` vale `'cafe'` sin tilde, y el filtro compara con `===`. Con `data-tipo="café"` la comparación `ruta.tipo === 'café'` sería falsa para todas las rutas, y el botón mostraría 0 resultados. Por eso el `data-tipo` debe ser idéntico al dato; la tilde solo va en el texto visible del botón.

---

## Issue #3 · G3 Datos → tarjetas

**Consulté:** _enlace(s)_ → _qué encontré_

1. **Predice y comprueba:** antes de ejecutarlas en la consola del navegador, escribe qué crees que devuelve cada línea. Después ejecútalas y anota el resultado real.
   ```js
   [1, 2, 3].map((n) => n * 10)
   ['a', 'b', 'c'].join('')
   ['a', 'b', 'c'].join(' - ')
   rutas.map((r) => r.nombre).length
   ```
   | Línea | Mi predicción | Resultado real |
   |---|---|---|
   | 1 | | |
   | 2 | | |
   | 3 | | |
   | 4 | | |

2. **Experimenta y explica:** quita temporalmente `.join('')` de `pintarRutas`. ¿Qué aparece entre las tarjetas y por qué? (Pista: ¿qué hace `innerHTML` cuando le asignas un arreglo?). Vuelve a ponerlo.
   _Tu respuesta_

3. **Explica:** ¿por qué la tarjeta se escribe con comillas invertidas `` ` `` y no con comillas simples `' '`? ¿Qué hace `${ }`?
   _Tu respuesta_

---

## Issue #4 · G4 Filtros y eventos

**Consulté:** _enlace(s)_ → _qué encontré_

1. **Predice y comprueba:** después de ejecutar `filtrarPorTipo(rutas, 'cafe')` en la consola, ¿cuánto vale `rutas.length`? ¿Por qué?
   _Tu respuesta_

2. **Explica el recorrido:** describe paso a paso qué pasa desde que la persona hace clic en el botón "Cultura" hasta que aparecen las tarjetas nuevas. Menciona: el evento, `estado`, `aplicarFiltros()`, `filtrarPorTipo()` y `pintarRutas()`.
   _Tu respuesta_

3. **¿Qué pasaría si…** usas el evento `'change'` en lugar de `'input'` en el buscador? Pruébalo y describe la diferencia.
   _Tu respuesta_

---

## Reto · Ordenar rutas

**Consulté:** _enlace(s)_ → _qué encontré_

1. **Explica:** ¿por qué `ordenarRutas` hace `const copia = [...lista]` antes de `sort()`? ¿Qué le pasaría a `rutas` si no se copia? ¿Qué prueba tuya lo demuestra?
   _Tu respuesta_

2. **Explica:** en `copia.sort((a, b) => a.precio - b.precio)`, ¿qué significa que la función devuelva un número negativo, cero o positivo?
   _Tu respuesta_

3. **Tus pruebas:** elige una de tus pruebas y explica qué error de programación detectaría si alguien dañara la función.
   _Tu respuesta_
