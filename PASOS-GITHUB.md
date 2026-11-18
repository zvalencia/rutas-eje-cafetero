# Cómo crear tu repositorio desde la plantilla

1. Abre el repositorio plantilla que compartió tu instructor.
2. Clic en el botón verde **Use this template → Create a new repository**.
3. Owner: tu usuario · Nombre: **`rutas-eje-cafetero`** · **Public** → *Create repository*.
4. Clónalo en tu equipo y ábrelo en VS Code:
   ```bash
   git clone https://github.com/TU-USUARIO/rutas-eje-cafetero.git
   cd rutas-eje-cafetero
   code .
   ```
5. Crea los 5 issues de `ISSUES.md` (en orden, para que queden #1 a #5).
6. Comprueba el punto de partida: `node --test` (verás pruebas en rojo: es lo esperado).
7. Trabaja un issue a la vez. Al terminar cada uno:
   ```bash
   git add .
   git commit -m "feat: descripción corta, closes #N"
   git push
   ```
8. Publica en GitHub Pages: **Settings → Pages → Build and deployment → Source: Deploy from a branch →
   Branch: `main` / `(root)` → Save**. En 1-2 minutos aparece tu enlace
   `https://TU-USUARIO.github.io/rutas-eje-cafetero/`. Pégalo en el README.

> ¿Por qué la plantilla y no un fork? Un repositorio creado desde una plantilla es **tuyo desde el primer commit**,
> sin historial ni conexión con el original.
> Ojo: los issues **no** se copian desde la plantilla, por eso los creas tú en el paso 5.
