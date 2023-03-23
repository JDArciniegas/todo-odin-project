import Project from "./Project";

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
    return newProject;
  };

  const addProjectToList = (allProjects) => {
    allProjects.forEach((item) => {
      let listItem = document.createElement("li");
      listItem.textContent = item.name;
      projectListNames.append(listItem);
    });
    return projectListNames;
  };

  addProjectToList(allProjects);

  const findProject = () => {
    allProjects.forEach((project) => {
      Object.keys(project).find((key) => {
        if(project[key] === "Home"){
          console.log(project);
        };
      })
    })
  };

  findProject();

  // ****** EVENTS *****
  addProjectButton.addEventListener("click", (e) => {
    projectForm.classList.remove("hidden");
  });

  projectListNames.addEventListener("click", (e) => {
    console.log(e.target);
  });

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addProjectToList(projectName.value);
  });
};

export default ProjectUI;
