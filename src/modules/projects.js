const projects = [
  {
    name: "eCommercite Task Project - Sena",
    description: "Proyecto de gestión de productos con Django y PostgreSQL.",
    year: "2024 - 2025",
    github: "https://github.com/tuusuario/ecommercite",
    image: "img/ecommercite.png",
    technologies: ["python", "django", "postgresql"]
  },
  {
    name: "Portfolio Personal",
    description: "Portafolio hecho con HTML, CSS y JS puro.",
    year: "2023",
    github: "https://github.com/tuusuario/portfolio",
    image: "img/portfolio.png",
    technologies: ["html5", "css3", "javascript"]
  }
];

const icons = {
  python: "<i class='bx bxl-python'></i>",
  django: "<i class='bx bxl-django'></i>",
  postgresql: "<i class='bx bxl-postgresql'></i>",
  html5: "<i class='bx bxl-html5'></i>",
  css3: "<i class='bx bxl-css3'></i>",
  javascript: "<i class='bx bxl-javascript'></i>"
};

const container = document.getElementById("projects-container");

projects.forEach(projects => {
  const card = document.createElement("div");
  card.className = "project-card";

  const tecnologiasHTML = projects.technologies.map(tec => icons[tec] || "").join(" ");

  card.innerHTML = `
    <img src="${projects.image}" alt="${projects.name}" class="project-image">
    <div class="project-info">
      <div class="year"><i class='bx bx-calendar'></i> ${projects.year}</div>
      <h3>${projects.name}</h3>
      <p>${projects.description}</p>
      <div class="tech-icons">${tecnologiasHTML}</div>
      <a href="${projects.github}" class="github-link" target="_blank">
        <i class='bx bxl-github'></i> Ver en GitHub
      </a>
    </div>
  `;

  container.appendChild(card);
});
