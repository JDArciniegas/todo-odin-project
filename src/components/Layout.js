import Project from "./Project";

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
  return header;
};
// name list for Projects
const projectNameContainer = (project) => {
  const leftContainer = document.createElement("div");
  leftContainer.setAttribute('id','left')
  leftContainer.append(displayProjectName(project));
  return leftContainer;
};
// project List
const projectListContainer = (project) => {
  const rightContainer = document.createElement("div");
  rightContainer.setAttribute("id", "right");
  rightContainer.append(displayProjectList(project));
  return rightContainer;
};

const contentContainer = (project) => {
  const contentContainer = document.createElement("div");
  contentContainer.setAttribute("id", "content-container");
  contentContainer.append(projectNameContainer(project));
  contentContainer.append(projectListContainer(project));
  return contentContainer;
};

const displayProjectName = (project) => {
  const projectName = document.createElement("p");
  projectName.textContent = project.name;
  return projectName;
};

const displayProjectList = (project) => {
  const display = document.createElement("ul");
  Object.values(project.projectList).forEach((value) => {
    let item = document.createElement("li");
    item.textContent = value.name;
    display.appendChild(item);
  });
  return display;
};

const Layout = () => {
  const homeLayout = document.createElement("div");
  homeLayout.append(createHeader());
  homeLayout.append(contentContainer(homeProject));

  return homeLayout;
};

export default Layout;
