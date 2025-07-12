document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("experience-container");
  console.log("Contenedor encontrado:", container);

  const experience = [
    {
      role: "Apprentice developer",
      company: "Sena - Software Analysis and Development Technologist",
      year: "2023 - 2025",
      description: "I had my theoretical stage where I learned different skills, including: software architecture, database management, virtual machines, development in Python, HTML and CSS, management of frameworks and virtual environments and Docker containers.",
      technologies: ["python", "docker", "postgresql"]
    },
    {
      role: "",
      company: "",
      year: "",
      description: "",
      technologies: [""]
    }
  ];

  const techIcons = {
    python: "<i class='bxl  bx-python'  ></i> ",
    django: "<i class='bxl  bx-django'  ></i> ",
    postgresql: "<i class='bxl  bx-postgresql'  ></i> ",
    excel: "<i class='bx bxl-microsoft'></i>",
    docker: "<i class='bxl  bx-docker'  ></i> ",
  };

  experience.forEach(exp => {
    const card = document.createElement("div");
    card.className = "experience-card";

    const tecnologiasHTML = exp.technologies.map(tec => techIcons[tec] || "").join(" ");

    card.innerHTML = `
      <div class="experience-info">
        <div class="periodo"><i class='bx bx-calendar'></i> ${exp.year}</div>
        <h3>${exp.role} - ${exp.company}</h3>
        <p>${exp.description}</p>
        <div class="tech-icons">${tecnologiasHTML}</div>
      </div>
    `;

    container.appendChild(card);
  });
});
