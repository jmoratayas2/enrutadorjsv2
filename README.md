# NovaWeb - SPA con Router en JavaScript puro

Proyecto académico desarrollado únicamente con HTML, CSS y JavaScript puro. Implementa un Router basado en `hash` y `fetch()` para cargar vistas HTML independientes dentro de `index.html` sin recargar por completo el sitio.

## Estructura

```text
SPA_Router_Vanilla/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── router.js
├── views/
│   ├── inicio.html
│   ├── nosotros.html
│   ├── servicios.html
│   └── contacto.html
└── img/
    └── hero-web.svg
```

## Cómo funciona el Router

1. Los enlaces usan rutas como `#/inicio` o `#/servicios`.
2. `router.js` escucha los eventos `DOMContentLoaded` y `hashchange`.
3. El Router identifica la ruta actual leyendo `window.location.hash`.
4. Busca el archivo correspondiente en el objeto `routes`.
5. Utiliza `fetch()` para leer el archivo HTML de `views/`.
6. Inserta el contenido dentro de `<main id="app">` usando `innerHTML`.
7. Actualiza el título del documento y el enlace activo del menú.

## Ejecutar localmente

Debido a que el proyecto utiliza `fetch()` para cargar archivos HTML, se recomienda ejecutarlo con un servidor local y no abrir `index.html` directamente con `file://`.

### VS Code + Live Server

1. Abrir la carpeta en Visual Studio Code.
2. Instalar la extensión Live Server.
3. Clic derecho sobre `index.html`.
4. Seleccionar **Open with Live Server**.

### Python

```bash
python -m http.server 8000
```

Luego abrir `http://localhost:8000`.

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub.
2. Subir todos los archivos conservando la estructura de carpetas.
3. Ir a **Settings > Pages**.
4. En **Build and deployment**, seleccionar **Deploy from a branch**.
5. Elegir la rama `main` y la carpeta `/ (root)`.
6. Guardar y esperar a que GitHub genere el enlace público.

## Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)
- Fetch API
- Hash routing

No utiliza frameworks ni librerías externas.
