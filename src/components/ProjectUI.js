import Project from "./Project";

const ProjectUI = () => {
  // project names container
  const projects = document.querySelector("#project-names");
  const projectList = document.querySelector("#project-list");

  // add project form
  const projectForm = document.querySelector("#project-form");
  const projectName = document.querySelector("#project-name");

  // buttons
  const addProjectButton = document.querySelector("#add-new-project");

  // ****** EVENTS *****
  addProjectButton.addEventListener("click", (e) => {
    projectForm.classList.remove("hidden");
  });

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addProjectToList(projectName.value);
  });

  const addProjectToList = (project) => {
    let newProject = new Project(project);
    let listItem = document.createElement("li");
    listItem.textContent = newProject.name;
    projectList.append(listItem);
  };

  addProjectToList("Home");
  addProjectToList("Work");
  addProjectToList("Gym");
};

export default ProjectUI;
