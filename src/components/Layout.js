import Project from "./Project";

const Layout = () => {
  // project names container
  // .add will create a task and add to corresponding project
  let allProjects = [];
  let currentProject;

  let homeProject = new Project("Home");
  homeProject.add("laundry", "do laundry", "2023-05-01", "low");
  homeProject.add("cooking", "Make Dinner", "2023-04-01", "high");
  homeProject.add("roof leak", "repair leak", "2023-04-01", "medium");

  let workProject = new Project("work");
  workProject.add("report", "ninja report", "2023-04-01", "high");

  allProjects.push(homeProject);
  allProjects.push(workProject);

  const projectTasks = document.querySelector("#task-list");
  const projectListNames = document.querySelector("#project-list");
  // add project form
  const projectForm = document.querySelector("#project-form");
  const projectName = document.querySelector("#project-name");
  const taskForm = document.querySelector("#task-form");

  const taskName = document.querySelector("#task-name");
  const taskDescription = document.querySelector("#task-description");
  const taskDate = document.querySelector("#task-date");
  const taskPriority = document.querySelector("#task-priority");
  const taskSubmit = document.querySelector("#task-submit");
  const addProjectButton = document.querySelector("#add-new-project");
  const addTaskButton = document.querySelector("#add-task");

  // Get the modal
  const modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

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

  const checkPriority = (priority) => {
    if (priority === "high") {
      return "priority_high";
    } else if (priority === "medium") {
      return "priority";
    } else {
      return "low_priority";
    }
  };

  const styleByPriority = (priorityValue, priorityText) => {
    if (priorityValue.textContent === "priority_high") {
      priorityValue.classList.add("high");
      priorityText.classList.add("high");
      priorityText.textContent = "Urgent";
    } else if (priorityValue.textContent === "priority") {
      priorityValue.classList.add("medium");
      priorityText.classList.add("medium");
      priorityText.textContent = "On time";
    } else if (priorityValue.textContent === "low_priority") {
      priorityValue.classList.add("low");
      priorityText.classList.add("low");
      priorityText.textContent = "A bit Early";
    }
  };
  const buildTask = (task) => {
    // main task container
    let container = document.createElement("div");

    // containes the information on the top side of the card
    let top = document.createElement("div");
    top.classList.add("task-container-top");

    // conatines Task name, Priority Icon, Priority Text
    let mainInfo = document.createElement("div");
    mainInfo.classList.add("main-task-info");

    // ***** Name of Task
    let name = document.createElement("p");
    name.textContent = task.name;

    // ***** Task DueDate
    let date = document.createElement("p");
    date.textContent = task.dueDate;

    // priority info container
    let priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority-container");
    // ***** Priority Text and Icon
    let priorityText = document.createElement("p");
    let priority = document.createElement("i");
    priority.classList.add("material-symbols-outlined");
    priority.textContent = checkPriority(task.priority);

    // ***** Task Description
    let description = document.createElement("p");
    description.textContent = task.description;
    description.classList.add("task-container-bottom");

    styleByPriority(priority, priorityText);

    priorityContainer.appendChild(priority);
    priorityContainer.appendChild(priorityText);

    mainInfo.appendChild(name);
    mainInfo.appendChild(priorityContainer);
    top.appendChild(mainInfo);
    top.appendChild(date);

    container.classList.add("task-container");
    container.appendChild(top);
    container.appendChild(description);
    return container;
  };

  const displayTasks = (tasks) => {
    tasks.forEach((task) => {
      let listItem = document.createElement("li");
      listItem.append(buildTask(task));
      listItem.classList.add("task");
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

  projectListNames.addEventListener("click", (e) => {
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

  // When the user clicks on the button, open the modal
  addTaskButton.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  taskSubmit.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearTasks();
    currentProject.add(
      taskName.value,
      taskDescription.value,
      taskDate.value,
      taskPriority.value
    );
    displayTasks(currentProject.projectList);
  });

  displayProjectNames(allProjects);
  displayTasks(homeProject.projectList);
};

export default Layout;
