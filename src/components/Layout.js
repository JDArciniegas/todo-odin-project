import Project from "./Project";

const newProjectButton = document.createElement("button");
newProjectButton.textContent = "New Project";

// default starting projects
const homeProject = new Project("Home");
homeProject.add("Laundry", "Laundry Day", "2023-04-01", "high");
homeProject.add("Cook", "Dinner", "2023-04-01", "medium");

// header element
const createHeader = () => {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Todo List";
  header.appendChild(h1);
  header.append(newProjectButton);
  return header;
};

// name list for Projects
const projectNameContainer = (project) => {
  const leftContainer = document.createElement("div");
  leftContainer.setAttribute("id", "left");
  leftContainer.classList.add("inner-container");
  leftContainer.append(displayProjectName(project));
  return leftContainer;
};

const displayProjectName = (project) => {
  const projectName = document.createElement("p");
  projectName.textContent = project.name;
  projectName.classList.add("project-name");

  const totalProjects = document.createElement("p");
  totalProjects.textContent = project.projectList.length;
  totalProjects.classList.add("total-projects");

  const projectNameInfo = document.createElement("div");
  projectNameInfo.classList.add("project-name-info");
  projectNameInfo.appendChild(projectName);
  projectNameInfo.appendChild(totalProjects);
  return projectNameInfo;
};

// project List
const projectListContainer = (project) => {
  const rightContainer = document.createElement("div");
  rightContainer.setAttribute("id", "right");
  rightContainer.classList.add("inner-container");
  rightContainer.append(displayProjectList(project));
  return rightContainer;
};

const displayProjectList = (project) => {
  const display = document.createElement("ul");
  Object.values(project.projectList).forEach((value) => {
    let item = document.createElement("li");
    item.innerHTML = `
    <span>${value.name}</span>
    <span>${value.description}</span>
    <span>${value.dueDate}</span>
    <span>${value.priority}</span>
    `;

    display.appendChild(item);
  });
  return display;
};

const contentContainer = (project) => {
  const contentContainer = document.createElement("div");
  contentContainer.setAttribute("id", "content-container");
  contentContainer.append(projectNameContainer(project));
  contentContainer.append(projectListContainer(project));
  return contentContainer;
};

newProjectButton.addEventListener("click", () => {
  console.log("click");
});

const Layout = () => {
  const homeLayout = document.createElement("div");
  homeLayout.setAttribute("id", "main-container");
  homeLayout.append(createHeader());
  homeLayout.append(contentContainer(homeProject));

  return homeLayout;
};

export default Layout;
