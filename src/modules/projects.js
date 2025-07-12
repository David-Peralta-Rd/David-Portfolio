const projects = [
  {
    name: "eCommercite Task Project - Sena",
    description: "Product management project with Django and PostgreSQL.",
    year: "2024 - 2025",
    github: "https://github.com/David-Peralta-Rd/Ecommerce-Project-for-Work-at-Sena?tab=readme-ov-file",
    image: "src/media/projects/1.ecommerce-project/ecommercite.png",
    technologies: ["python", "django", "postgresql"]
  },
  {
    name: "Personal Portfolio",
    description: "Portfolio made with pure HTML, CSS and JS",
    year: "2025",
    github: "https://github.com/David-Peralta-Rd/My_Portfolio",
    image: "src/media/projects/2.portfolio-project/portfolio.png",
    technologies: ["html5", "css3", "javascript"]
  },
];

const icons = {
  python: "<i class='bxl  bx-python'  ></i> ",
  django: "<i class='bxl  bx-django'  ></i> ",
  postgresql: "<i class='bxl  bx-postgresql'  ></i> ",
  html5: "<i class='bxl  bx-html5'  ></i> ",
  css3: "<i class='bxl  bx-css3'  ></i> ",
  javascript: "<i class='bxl  bx-javascript'  ></i> "
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
        <i class='bx bxl-github'></i> Visit GitHub
      </a>
    </div>
  `;

  container.appendChild(card);
});
