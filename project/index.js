const navbar = document.querySelector("nav");
const hamburgerToggle = document.querySelector("#hamburger-toggle");

hamburgerToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburgerToggle.classList.toggle("active");
});

function resetClass(el, className) {
  el.map((el) => el.classList.remove(className));
}

const projectTabs = Array.from(document.querySelectorAll("section#project .project-tabs button"));
projectTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    resetClass(projectTabs, "active");
    tab.classList.add("active");
    const category = tab.getAttribute("data-category");
    const projectContainer = document.querySelector("section#project .project-container");
    projectContainer.innerHTML = "";

    switch (category) {
      case "all":
        showAllProject();
        break;
      case "web":
        showWebProject();
        break;
      case "ui/ux":
        showUIUXProject();
    }
  });
});

async function getAllProjects() {
  const result = await fetch(`../json/project.json`).then((res) => res.json());
  return result;
}

async function getProjectByCategory(category) {
  let result = await fetch(`../json/project.json`).then((res) => res.json());
  result = result.filter((project) => project.category === category);
  return result;
}

async function showAllProject() {
  const data = await getAllProjects();
  const projectContainer = document.querySelector("section#project .project-container");
  data.map((card) => {
    projectContainer.innerHTML += `<a href="${card.url}" target="_blank" class="card group overflow-hidden rounded-lg bg-white shadow md:max-w-[340px] lg:max-w-[450px] xl:max-w-[550px]">
            <div class="aspect-video w-full overflow-hidden shadow-sm">
              <img class="h-full w-full transition-transform duration-300 hover:transition-transform hover:duration-300 group-hover:scale-110" src="../${card.img_path}" alt="" />
            </div>
            <div class="project-detail border-t border-gray-600/10 bg-white px-2.5 pb-2.5 pt-2 lg:px-4 lg:py-4">
              <h1 class="text-xl font-bold">${card.title}</h1>
              <p class="text-black/70">${card.description}</p>
            </div>
          </a>`;
  });
}

async function showWebProject() {
  const data = await getProjectByCategory("web");
  const projectContainer = document.querySelector("section#project .project-container");
  data.map((card) => {
    projectContainer.innerHTML += `<div class="card group overflow-hidden rounded-lg bg-white shadow md:max-w-[340px] lg:max-w-[450px] xl:max-w-[550px]">
            <div class="aspect-video w-full overflow-hidden shadow-sm">
              <img class="h-full w-full transition-transform duration-300 hover:transition-transform hover:duration-300 group-hover:scale-110" src="../${card.img_path}" alt="" />
            </div>
            <div class="project-detail bg-white px-2.5 pb-2.5 pt-2 lg:px-4 lg:py-4">
              <h1 class="text-xl font-bold">${card.title}</h1>
              <p class="text-black/70">${card.description}</p>
            </div>
          </div>`;
  });
}

async function showUIUXProject() {
  const data = await getProjectByCategory("ui/ux");
  const projectContainer = document.querySelector("section#project .project-container");
  data.map((card) => {
    projectContainer.innerHTML += `<a href="${card.url}" target="_blank" class="card group overflow-hidden rounded-lg bg-white shadow md:max-w-[340px] lg:max-w-[450px] xl:max-w-[550px]">
            <div class="aspect-video w-full overflow-hidden shadow-sm">
              <img class="h-full w-full transition-transform duration-300 hover:transition-transform hover:duration-300 group-hover:scale-110" src="../${card.img_path}" alt="" />
            </div>
            <div class="project-detail bg-white px-2.5 pb-2.5 pt-2 lg:px-4 lg:py-4">
              <h1 class="text-xl font-bold">${card.title}</h1>
              <p class="text-black/70">${card.description}</p>
            </div>
          </a>`;
  });
}

showAllProject();
