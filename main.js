const botBtn = document.getElementById("bot-btn");
const websiteBtn = document.getElementById("website-btn");
const ECommerceBtn = document.getElementById("e-commerce-btn");

const botProject = document.getElementById("bot-project");
const websiteProject = document.getElementById("website-project");
const ECommerceProject = document.getElementById("e-commerce-project");

const projects = { ECommerceProject, websiteProject, botProject };

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
websiteBtn.addEventListener("click", () => showProject(websiteProject));
ECommerceBtn.addEventListener("click", () => showProject(ECommerceProject));

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

showProject(ECommerceProject);
