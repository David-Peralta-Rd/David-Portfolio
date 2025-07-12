document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("experience-container");
  console.log("Contenedor encontrado:", container);

  const experiencias = [
    {
      rol: "Backend Developer",
      empresa: "Sena - Proyecto Interno",
      periodo: "2023 - 2024",
      descripcion: "Desarrollo de APIs REST con Django y PostgreSQL para sistema académico interno.",
      tecnologias: ["python", "django", "postgresql"]
    },
    {
      rol: "Practicante de Desarrollo",
      empresa: "Empresa Ficticia",
      periodo: "2022",
      descripcion: "Automatización de reportes y gestión de datos usando Python y Pandas.",
      tecnologias: ["python", "pandas", "excel"]
    }
  ];

  const techIcons = {
    python: "<i class='bx bxl-python'></i>",
    django: "<i class='bx bxl-django'></i>",
    postgresql: "<i class='bx bxl-postgresql'></i>",
    pandas: "<i class='bx'>📊</i>",
    excel: "<i class='bx bxl-microsoft'></i>"
  };

  experiencias.forEach(exp => {
    const card = document.createElement("div");
    card.className = "experience-card";

    const tecnologiasHTML = exp.tecnologias.map(tec => techIcons[tec] || "").join(" ");

    card.innerHTML = `
      <div class="experience-info">
        <div class="periodo"><i class='bx bx-calendar'></i> ${exp.periodo}</div>
        <h3>${exp.rol} - ${exp.empresa}</h3>
        <p>${exp.descripcion}</p>
        <div class="tech-icons">${tecnologiasHTML}</div>
      </div>
    `;

    container.appendChild(card);
  });
});
