const app = document.getElementById("app");
const links = document.querySelectorAll("nav a");

const rutas = {
  "/inicio": "views/inicio.html",
  "/nosotros": "views/nosotros.html",
  "/servicios": "views/servicios.html",
  "/contacto": "views/contacto.html"
};

function obtenerRuta() {
  return location.hash.replace("#", "") || "/inicio";
}

async function cargarVista() {
  let ruta = obtenerRuta();

  if (!rutas[ruta]) {
    ruta = "/inicio";
    location.hash = "#/inicio";
  }

  try {
    const respuesta = await fetch(rutas[ruta]);
    const contenido = await respuesta.text();
    app.innerHTML = contenido;

    links.forEach((link) => {
      link.classList.toggle("active", link.dataset.route === ruta);
    });

    if (ruta === "/contacto") {
      activarFormulario();
    }
  } catch (error) {
    app.innerHTML = "<p>No se pudo cargar la página.</p>";
  }
}

function activarFormulario() {
  const formulario = document.getElementById("contact-form");
  const mensaje = document.getElementById("form-message");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    mensaje.textContent = "Mensaje enviado correctamente.";
    formulario.reset();
  });
}

window.addEventListener("hashchange", cargarVista);
window.addEventListener("DOMContentLoaded", cargarVista);
