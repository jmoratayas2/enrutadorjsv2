const app = document.querySelector("#app");
const navLinks = document.querySelectorAll(".main-nav a");

// Cada ruta apunta a un archivo HTML independiente dentro de /views.
const routes = {
  "/inicio": {
    title: "Inicio",
    file: "views/inicio.html",
  },
  "/nosotros": {
    title: "Nosotros",
    file: "views/nosotros.html",
  },
  "/servicios": {
    title: "Servicios",
    file: "views/servicios.html",
  },
  "/contacto": {
    title: "Contacto",
    file: "views/contacto.html",
  },
};

function getCurrentRoute() {
  return window.location.hash.replace("#", "") || "/inicio";
}

function setActiveLink(route) {
  navLinks.forEach((link) => {
    const isActive = link.dataset.route === route;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function initializeViewEvents(route) {
  // Ejemplo de interacción JavaScript en la vista de Contacto.
  if (route === "/contacto") {
    const form = document.querySelector("#contact-form");
    const message = document.querySelector("#form-message");

    if (form && message) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.elements.name.value.trim();
        message.textContent = name
          ? `Gracias, ${name}. Tu mensaje fue registrado como demostración.`
          : "Gracias. Tu mensaje fue registrado como demostración.";
        form.reset();
      });
    }
  }
}

async function renderRoute() {
  const route = getCurrentRoute();
  const routeConfig = routes[route];

  if (!routeConfig) {
    window.location.hash = "#/inicio";
    return;
  }

  app.setAttribute("aria-busy", "true");
  app.innerHTML = '<p class="loading-message">Cargando contenido...</p>';

  try {
    const response = await fetch(routeConfig.file);

    if (!response.ok) {
      throw new Error(`No se pudo cargar ${routeConfig.file}`);
    }

    const html = await response.text();
    app.innerHTML = html;
    document.title = `${routeConfig.title} | NovaWeb`;
    setActiveLink(route);
    initializeViewEvents(route);
  } catch (error) {
    console.error(error);
    app.innerHTML = `
      <div class="error-message">
        <h2>No fue posible cargar la vista</h2>
        <p>Ejecuta el proyecto desde un servidor local o publícalo en GitHub Pages.</p>
      </div>
    `;
  } finally {
    app.setAttribute("aria-busy", "false");
  }
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);
