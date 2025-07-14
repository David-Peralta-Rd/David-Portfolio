document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    { name: "Constancy", level: "mastery" },
    { name: "Python", level: "intermediate" },
    { name: "PostgreSQL", level: "intermediate" },
    { name: "Git & GitHub", level: "intermediate" },
    { name: "Docker", level: "intermediate" }
  ];

  const levelClass = {
    basic: "level-basic",
    intermediate: "level-intermediate",
    advanced: "level-advanced",
    mastery: "level-mastery"
  };

  const levelLabel = {
    basic: "Basic",
    intermediate: "Intermediate",
    advanced: "Advanced",
    mastery: "Mastery"
  };

  const container = document.getElementById("skills-container");
  if (!container) {
    console.warn("⚠️ Container not found");
    return;
  }

  skills.forEach((skill, index) => {
    const item = document.createElement("div");
    item.className = "skill-item";

    item.innerHTML = `
      <span class="skill-name">${skill.name}</span>
      <span class="skill-level ${levelClass[skill.level]}">${levelLabel[skill.level]}</span>
    `;

    container.appendChild(item);

    setTimeout(() => {
      item.classList.add("show");
    }, index * 100);
  });
});
