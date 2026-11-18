# Rutas del Eje

Catálogo de rutas turísticas del Eje Cafetero (Caldas, Risaralda y Quindío).
Las tarjetas **no están escritas a mano**: JavaScript las construye a partir de los datos en `js/datos.js`,
y se pueden filtrar por tipo y buscar por nombre o municipio.

- **Aprendiz:** _tu nombre completo_
- **Ficha:** 3349882 · Tecnólogo en Análisis y Desarrollo de Software · SENA CDITI
- **Sitio publicado (GitHub Pages):** _pega aquí tu enlace https://TU-USUARIO.github.io/rutas-eje-cafetero/_

- **Lo que aprendí:** ver [APRENDIZAJES.md](APRENDIZAJES.md)

## Tecnologías
- HTML semántico + Bootstrap 5.3 (CDN): navbar con collapse, btn-group, cards y grilla
- CSS propio con variables (`css/estilos.css`) como guía de estilo
- JavaScript: arreglos de objetos, `map()`, `filter()`, template literals y eventos

## Guía de estilo
| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--eje-primario` | `#1f5f3a` | Botones y acentos | Blanco encima: _x_:1 |
| `--eje-secundario` | _completa_ | Navbar y pie | Blanco encima: _x_:1 |
| `--eje-fondo` | `#faf6ee` | Fondo de la página | - |
| `--eje-texto` | _completa_ | Texto general | Sobre el fondo: _x_:1 |
| `--eje-fuente` | _completa_ | Toda la página | - |

## Cómo verificar
```bash
node --test
```

## Estructura
```
index.html        página principal
css/estilos.css   guía de estilo (variables) + personalización de Bootstrap
js/datos.js       los datos: arreglo de rutas
js/app.js         la lógica: datos → tarjetas, filtros y eventos
tests/            pruebas automáticas (no modificar las 1-4)
APRENDIZAJES.md   mis explicaciones de cómo funciona cada parte
img/              ilustraciones
```
