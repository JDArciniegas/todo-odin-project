import Project from "./Project";
import { findTasks } from "./TaskUi";

const ProjectUI = () => {
  // project names container
  let allProjects = [];
  let homeProject = new Project("Home");
  homeProject.add("laundry", "do laundry", "2023-05-01", "low");
  let workProject = new Project("work");
  workProject.add("report", "ninja report", "2023-04-01", "high");
  allProjects.push(homeProject);
  allProjects.push(workProject);

  const projectListNames = document.querySelector("#project-list");
  // add project form
  const projectForm = document.querySelector("#project-form");
  const projectName = document.querySelector("#project-name");

  // buttons
  const addProjectButton = document.querySelector("#add-new-project");

  const createProject = (project) => {
    let newProject = new Project(project);
    allProjects.push(newProject);
  };

  const displayProjectNames = (projects) => {
    projects.forEach((project) => {
      let listItem = document.createElement("li");
      listItem.textContent = project.name;
      projectListNames.appendChild(listItem);
    });
  };

  // ****** EVENTS *****
  addProjectButton.addEventListener("click", (e) => {
    projectForm.classList.remove("hidden");
  });

  projectListNames.addEventListener("click", (e) => {
   findTasks(allProjects, e.target.textContent.toLowerCase())
  });

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createProject(projectName.value);
    displayProjectNames(allProjects);
  });

  displayProjectNames(allProjects);
};

export default ProjectUI;
