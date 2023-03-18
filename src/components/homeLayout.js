import leftProjectContainer from "./ProjectUI";
import rightProjectContainer from "./TaskUi";

const projectsContainer = (() => {
  let projects = document.createElement("div");
  projects.setAttribute("id", "projects");
  projects.appendChild(leftProjectContainer());
  projects.appendChild(rightProjectContainer());

  return projects;
})();

const homeLayout = (() => {
  const layout = document.createElement("div");
  layout.setAttribute("id", "layout");

  layout.append(projectsContainer);
  return layout;
})();

export { homeLayout, projectsContainer };
