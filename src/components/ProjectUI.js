import Project from "./Project";
import Task from "./Task";

const ProjectUI = () => {
  // project names container
  // .add will create a task and add to corresponding project
  let allProjects = [];
  let currentProject;

  let homeProject = new Project("Home");
  homeProject.add("laundry", "do laundry", "2023-05-01", "low");
  homeProject.add("cooking", "Make Dinner", "2023-04-01", "high");
  homeProject.add("roof leak", "repair leak", "2023-04-01", "high");

  let workProject = new Project("work");
  workProject.add("report", "ninja report", "2023-04-01", "high");

  allProjects.push(homeProject);
  allProjects.push(workProject);

  const projectTasks = document.querySelector("#task-list");
  const projectListNames = document.querySelector("#project-list");
  // add project form
  const projectForm = document.querySelector("#project-form");
  // project input
  const projectName = document.querySelector("#project-name");
  // task form
  const taskForm = document.querySelector("#task-form");

  // task inputs
  const taskName = document.querySelector("#task-name");
  const taskDescription = document.querySelector("#task-description");
  const taskDate = document.querySelector("#task-date");
  const taskPriority = document.querySelector("#task-priority");
  const taskSubmit = document.querySelector("#task-submit");
  // buttons
  const addProjectButton = document.querySelector("#add-new-project");
  const addTaskButton = document.querySelector("#add-task");

  const createProject = (project) => {
    let newProject = new Project(project);
    allProjects.push(newProject);
  };

  const displayProjectNames = (projects) => {
    projects.forEach((project) => {
      let listItem = document.createElement("li");
      listItem.classList.add("project");
      listItem.textContent = project.name;
      projectListNames.appendChild(listItem);
    });
  };

  const displayTasks = (tasks) => {
    tasks.forEach((task) => {
      let listItem = document.createElement("li");
      listItem.classList.add("task");
      listItem.textContent = `${task.name} - ${task.description} - ${task.dueDate} - ${task.priority}`;
      projectTasks.appendChild(listItem);
    });
  };

  const findTasks = (projects, target) => {
    projects.forEach((project) => {
      if (project.name.toLowerCase() === target) {
        displayTasks(project.projectList);
      }
    });
  };

  const findProject = (projects, target) => {
    projects.find((project) => {
      if (project.name.toLowerCase() === target) {
        currentProject = project;
      }
    });
  };

  const clearTasks = () => {
    projectTasks.innerHTML = "";
  };

  // ****** EVENTS *****
  addProjectButton.addEventListener("click", (e) => {
    projectForm.classList.remove("hidden");
  });

  projectListNames.addEventListener("click", (e) => {
    addTaskButton.classList.remove("hidden");
    clearTasks();
    findTasks(allProjects, e.target.textContent.toLowerCase());
    findProject(allProjects, e.target.textContent.toLowerCase());
  });

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createProject(projectName.value);
    projectListNames.innerHTML = "";
    displayProjectNames(allProjects);
  });

  addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    taskForm.classList.remove("hidden");
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    currentProject.add("1,2,3,4");
    displayTasks(currentProject.projectList);
  });

  displayProjectNames(allProjects);
  displayTasks(homeProject.projectList);
};

export default ProjectUI;
