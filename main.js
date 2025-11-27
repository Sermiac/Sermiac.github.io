const botBtn = document.getElementById("bot-btn");
const gameBtn = document.getElementById("game-btn");
const websiteBtn = document.getElementById("website-btn");

const botProject = document.getElementById("bot-project");
const gameProject = document.getElementById("game-project");
const websiteProject = document.getElementById("website-project");

const projects = { botProject, gameProject, websiteProject };

function showProject(project) {
  const visible = document.querySelectorAll(".visible");
  let projectsToHide = [];
  let toShow;

  for (i in projects) {
    if (projects[i] !== project) {
      projectsToHide.push(projects[i]);

      projects[i].classList.remove("visible");
      projects[i].classList.add("hidden");
    }
  }
  toShow = project;

  setTimeout(() => {
    projectsToHide.forEach((p) => {
      p.style.display = "none";
    });
    toShow.style.display = "block";
    toShow.classList.remove("hidden");
    toShow.classList.add("visible");
  }, 300);
}

botBtn.addEventListener("click", () => showProject(botProject));
gameBtn.addEventListener("click", () => showProject(gameProject));
websiteBtn.addEventListener("click", () => showProject(websiteProject));

function scrollToSection(section) {
  const target = document.querySelector(section);
  const offset = 80;

  const elementPosition =
    target.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: elementPosition - offset,
    behavior: `smooth`,
  });
}

showProject(websiteProject);
