const proyectos = [
  {
    nombre: "eCommercite Task Project - Sena",
    descripcion: "Proyecto de gestión de productos con Django y PostgreSQL.",
    año: "2024 - 2025",
    github: "https://github.com/tuusuario/ecommercite",
    imagen: "img/ecommercite.png",
    tecnologias: ["python", "django", "postgresql"]
  },
  {
    nombre: "Portfolio Personal",
    descripcion: "Portafolio hecho con HTML, CSS y JS puro.",
    año: "2023",
    github: "https://github.com/tuusuario/portfolio",
    imagen: "img/portfolio.png",
    tecnologias: ["html5", "css3", "javascript"]
  }
];

const iconos = {
  python: "<i class='bx bxl-python'></i>",
  django: "<i class='bx bxl-django'></i>",
  postgresql: "<i class='bx bxl-postgresql'></i>",
  html5: "<i class='bx bxl-html5'></i>",
  css3: "<i class='bx bxl-css3'></i>",
  javascript: "<i class='bx bxl-javascript'></i>"
};

const container = document.getElementById("projects-container");

proyectos.forEach(proyecto => {
  const card = document.createElement("div");
  card.className = "project-card";

  const tecnologiasHTML = proyecto.tecnologias.map(tec => iconos[tec] || "").join(" ");

  card.innerHTML = `
    <img src="${proyecto.imagen}" alt="${proyecto.nombre}" class="project-image">
    <div class="project-info">
      <div class="year"><i class='bx bx-calendar'></i> ${proyecto.año}</div>
      <h3>${proyecto.nombre}</h3>
      <p>${proyecto.descripcion}</p>
      <div class="tech-icons">${tecnologiasHTML}</div>
      <a href="${proyecto.github}" class="github-link" target="_blank">
        <i class='bx bxl-github'></i> Ver en GitHub
      </a>
    </div>
  `;

  container.appendChild(card);
});
