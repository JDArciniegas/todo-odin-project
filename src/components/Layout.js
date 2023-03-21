import Project from "./Project";

// default starting projects
const homeProject = new Project("Home");
homeProject.add('Laundry','Laundry Day', '2023-04-01','high');
homeProject.add("Cook", "Dinner", "2023-04-01", "medium");


const createHeader = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = "Todo List"
  header.appendChild(h1);
  return header
}

const contentContainer = () => {
  const contentContainer = document.createElement('div');
  const projectNameContainer = document.createElement('div');
  const projectListContainer = document.createElement("div");
  projectNameContainer.append(displayProjectName(homeProject));
  projectListContainer.append(displayProjectList(homeProject))
  contentContainer.appendChild(projectNameContainer);
  contentContainer.appendChild(projectListContainer);
  return contentContainer;
}

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
  homeLayout.append(contentContainer());

  return homeLayout;
};

export default Layout;
