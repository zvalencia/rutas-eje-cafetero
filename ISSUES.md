# Issues para crear en tu repositorio

Crea estos 5 issues en **tu** repositorio (pestaña *Issues → New issue*), en este orden,
para que queden numerados del #1 al #5. Copia el título y pega la descripción.

**Cómo trabajar cada issue:** primero consulta los enlaces, predice qué va a pasar, pruébalo en la consola, implementa y al final explica en `APRENDIZAJES.md` lo que entendiste.

Cuando termines cada uno, haz commit y push con un mensaje que lo cierre, por ejemplo:
`git commit -m "feat: guía de estilo con variables CSS, closes #1"`

---

## #1 · G1 Guía de estilo con variables CSS
**Como** visitante **quiero** que el sitio tenga colores y tipografía coherentes **para** reconocer la marca y leer con comodidad.

**Consulta antes de empezar**
- MDN, Usar propiedades personalizadas (variables) de CSS: https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties
  Cómo se declaran en `:root` y se leen con `var()`.
- Bootstrap, CSS variables: https://getbootstrap.com/docs/5.3/customize/css-variables/
  Las variables globales `--bs-body-*`.
- Bootstrap, Buttons, sección *Variables*: https://getbootstrap.com/docs/5.3/components/buttons/#variables
  Qué variables `--bs-btn-*` lee cada botón.
- WebAIM, Contrast Checker: https://webaim.org/resources/contrastchecker/
  Mide tus colores antes de elegirlos.

**Criterios de aceptación**
- [ ] Dado `css/estilos.css`, cuando reviso `:root`, entonces encuentro `--eje-secundario`, `--eje-texto` y `--eje-fuente`.
- [ ] Dado el texto sobre el fondo, cuando mido el contraste, entonces es ≥ 4.5:1.
- [ ] Dado Bootstrap, cuando cargo la página, entonces usa mis variables (`--bs-body-color`, `--bs-body-font-family`).
- [ ] Dados los botones de filtro, cuando los veo, entonces usan `--eje-primario`.
- [ ] La tabla "Guía de estilo" del README está completa.
- [ ] `node --test` pasa el bloque **G1**.
- [ ] Respondí la sección **#1** de `APRENDIZAJES.md`.

---

## #2 · G2 Componentes: navbar con collapse y botones de filtro
**Como** visitante en celular **quiero** un menú que se pliegue y botones para filtrar **para** navegar sin estorbos.

**Consulta antes de empezar**
- Bootstrap, Navbar, sección *Responsive behaviors*: https://getbootstrap.com/docs/5.3/components/navbar/#responsive-behaviors
  Estructura toggler + collapse y sus atributos.
- Bootstrap, Button group: https://getbootstrap.com/docs/5.3/components/button-group/
  Por qué `role="group"` y `aria-label`.
- MDN, aria-pressed: https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA/Attributes/aria-pressed
  Qué son los botones de alternar.
- MDN, Atributos data-*: https://developer.mozilla.org/es/docs/Web/HTML/Global_attributes/data-*
  Para qué sirve `data-tipo`.

**Criterios de aceptación**
- [ ] Dado un ancho menor a 768 px, cuando cargo la página, entonces el menú se esconde tras el botón de menú y se abre al tocarlo.
- [ ] El botón de menú tiene `aria-controls`, `aria-expanded` y `aria-label`.
- [ ] Hay 5 botones de filtro con `data-tipo` y `aria-pressed`.
- [ ] `node --test` pasa el bloque **G2**.
- [ ] Respondí la sección **#2** de `APRENDIZAJES.md`.

---

## #3 · G3 Datos → tarjetas
**Como** visitante **quiero** ver todas las rutas como tarjetas **para** comparar destinos de un vistazo.

**Consulta antes de empezar**
- MDN, Plantillas literales (template literals): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
  Comillas invertidas y `${ }`.
- MDN, Array.prototype.map(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  Mira *Valor devuelto*.
- MDN, Array.prototype.join(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  Qué separador usa si no le das uno.
- MDN, Element.innerHTML: https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
  Qué pasa con lo que había antes.
- javascript.info, Métodos de arrays: https://es.javascript.info/array-methods
  Lectura recomendada con ejercicios.

**Criterios de aceptación**
- [ ] Dado `datos.js` con 11 rutas, cuando abro la página, entonces veo 11 tarjetas y el texto "11 rutas encontradas".
- [ ] Ninguna tarjeta está escrita a mano en `index.html`: las crea `crearCard()`.
- [ ] Las rutas con precio 0 muestran "Gratis".
- [ ] `node --test` pasa el bloque **G3**.
- [ ] Respondí la sección **#3** de `APRENDIZAJES.md` (incluida la tabla de predicciones).

---

## #4 · G4 Filtros, buscador y eventos
**Como** visitante **quiero** filtrar por tipo y buscar por nombre o municipio **para** encontrar rápido lo que me interesa.

**Consulta antes de empezar**
- MDN, Array.prototype.filter(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  ¿modifica el arreglo original?
- MDN, Funciones flecha: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  Cuándo hace falta `return`.
- MDN, String.prototype.includes(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
- MDN, EventTarget.addEventListener(): https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
- MDN, Evento input: https://developer.mozilla.org/es/docs/Web/API/Element/input_event
  Compáralo con `change`.
- MDN, HTMLElement.dataset: https://developer.mozilla.org/es/docs/Web/API/HTMLElement/dataset
- MDN, aria-live: https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA/Attributes/aria-live
- javascript.info, Introducción a los eventos del navegador: https://es.javascript.info/introduction-browser-events

**Criterios de aceptación**
- [ ] Dado el filtro "Café", cuando le doy clic, entonces solo veo 2 tarjetas y el botón queda activo.
- [ ] Dado el buscador, cuando escribo "salento", entonces veo solo las rutas de Salento (también con "SALENTO" o con tildes).
- [ ] Filtro y buscador funcionan juntos.
- [ ] Si no hay resultados, aparece "No encontramos rutas…" y el lector de pantalla lo anuncia (`aria-live`).
- [ ] `node --test` pasa el bloque **G4**.
- [ ] Respondí la sección **#4** de `APRENDIZAJES.md`.

---

## #5 · RETO Ordenar rutas
**Como** visitante **quiero** ordenar las rutas por nombre, precio o duración **para** planear mi viaje.

**Consulta:** los enlaces están en `RETO.md`.

**Criterios de aceptación:** los de `RETO.md`, incluida la sección **Reto** de `APRENDIZAJES.md`.
