import leftProjectContainer from "./ProjectUI";


// ******************* right - side of container **********************

const rightProjectContainer = () => {
   let right = document.createElement("div");
   right.setAttribute("id", "right");
   right.classList.add("container-sides");
  return right;
};

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
