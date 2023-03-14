import Project from "./Project";
import Task from "./Task";
import {homeLayout, projectsContainer} from "./homeLayout";
const DOM = (() => {
  const DOMcontainer = document.createElement('div');
  const projects = new Project("Today");

  projectsContainer.append(projects.name);
  DOMcontainer.appendChild(homeLayout);
  return DOMcontainer;
})();

export default DOM;
