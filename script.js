const app = document.querySelector("#app");
const navLinks = document.querySelectorAll(".main-nav a");

const routes = {
  "/inicio": {
    title: "Inicio",
    content: `
      <h2>Todo lo que necesitas en un solo lugar</h2>
      <p>Queremos brindarte una experiencia sencilla, cercana y agradable desde el primer momento.</p>
      <span class="highlight">Estamos para ayudarte</span>
      <div class="cards">
        <article class="card">
          <h3>Atención cercana</h3>
          <p>Escuchamos tus ideas y buscamos la mejor forma de ayudarte.</p>
        </article>
        <article class="card">
          <h3>Soluciones simples</h3>
          <p>Ofrecemos respuestas claras y adaptadas a lo que necesitas.</p>
        </article>
      </div>
    `,
  },
  "/acerca": {
    title: "Quiénes somos",
    content: `
      <h2>Quiénes somos</h2>
      <p>Somos un equipo comprometido con ofrecer un servicio responsable, amable y de calidad.</p>
      <span class="highlight">Trabajamos contigo</span>
      <div class="cards">
        <article class="card">
          <h3>Nuestra misión</h3>
          <p>Convertir tus ideas en resultados útiles y fáciles de disfrutar.</p>
        </article>
        <article class="card">
          <h3>Nuestros valores</h3>
          <p>Confianza, respeto y dedicación en cada trabajo que realizamos.</p>
        </article>
      </div>
    `,
  },
  "/servicios": {
    title: "Servicios",
    content: `
      <h2>Lo que podemos hacer por ti</h2>
      <p>Te acompañamos con opciones prácticas para dar forma a tus ideas y alcanzar tus objetivos.</p>
      <span class="highlight">Elige la opción ideal para ti</span>
      <div class="cards">
        <article class="card">
          <h3>Asesoría</h3>
          <p>Te orientamos para que puedas tomar decisiones con mayor seguridad.</p>
        </article>
        <article class="card">
          <h3>Diseño</h3>
          <p>Creamos propuestas atractivas, ordenadas y fáciles de entender.</p>
        </article>
        <article class="card">
          <h3>Acompañamiento</h3>
          <p>Seguimos a tu lado para resolver dudas y realizar mejoras.</p>
        </article>
      </div>
    `,
  },
  "/contacto": {
    title: "Contacto",
    content: `
      <h2>Hablemos</h2>
      <p>Cuéntanos qué necesitas. Estaremos encantados de escucharte y responder tus preguntas.</p>
      <span class="highlight">Esperamos tu mensaje</span>
      <div class="cards">
        <article class="card">
          <h3>Correo</h3>
          <p>correo@ejemplo.com</p>
        </article>
        <article class="card">
          <h3>Telefono</h3>
          <p>+00 123 456 789</p>
        </article>
      </div>
    `,
  },
};

function getCurrentRoute() {
  return window.location.hash.replace("#", "") || "/inicio";
}

function setActiveLink(route) {
  navLinks.forEach((link) => {
    const isActive = link.dataset.route === route;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function renderRoute() {
  const route = getCurrentRoute();
  const view = routes[route] || routes["/inicio"];

  if (!routes[route]) {
    window.location.hash = "#/inicio";
    return;
  }

  document.title = `${view.title} | Mi Sitio Web`;
  app.innerHTML = view.content;
  setActiveLink(route);
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);
