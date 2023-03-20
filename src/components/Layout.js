import Project from "./Project";
import Task from "./Task";

let allProjects = [];
let homeProject = new Project("home");
homeProject.addTask(new Task("laundry"));
allProjects.push(homeProject);
homeProject.addTask(new Task("work"));

let schoolProject = new Project("school");
schoolProject.addTask(new Task("laundry"));
allProjects.push(schoolProject);
schoolProject.addTask(new Task("work"));

const header = () => {
  const header = document.createElement("h1");
  header.textContent = "Todo List";
  return header;
};

const projects = () => {
  let projectNames = [];
  allProjects.forEach((project) => {
    projectNames.push(project.name);
  });
  return projectNames;
};

const tasks = () => {
  let projectItems = [];
  allProjects.forEach((project) => {
    project.projectTasks.forEach((p) => {
      projectItems.push(p.name);
    });
  });
  return projectItems;
};

const spacer = () => {
  return " ________      ";
};

const Layout = () => {
  const homeLayout = document.createElement("div");
  homeLayout.append(header());
  homeLayout.append(projects());
  homeLayout.append(spacer());
  homeLayout.append(tasks());
  return homeLayout;
};

export default Layout;
