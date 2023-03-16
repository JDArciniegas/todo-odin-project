
// function to create new element
const createElement = (element) => {
  return document.createElement(element);
};

// function to add class name to new elements
const addClassToElement = (element, className) => {
  element.classList.add(className);
};

// create element with class
const createElementWithClass = (element, className) => {
  let HTMLElement = document.createElement(element);
  HTMLElement.classList.add(className);
  return HTMLElement;
};

// create element with id
const createElementWithId = (element, className) => {
  let HTMLElement = document.createElement(element);
  HTMLElement.setAttribute("id", className);
  return HTMLElement;
};

// ******************* left - side of container **********************
// HEADER
const createHeader = () => {
  const headerContainer = createElementWithClass("header", "header-container");
  // header-container contents
  const taskHeader = createElementWithClass("h1", "header");
  taskHeader.innerText = "Projects";
  // -----
  headerContainer.appendChild(taskHeader);
  headerContainer.append(icon);
  return headerContainer;
};
// header icon
let icon = createElementWithClass("span", "material-symbols-outlined");
icon.setAttribute("id", "addIcon");
icon.innerText = "Add";


const inputText = createElement("input");
inputText.setAttribute("placeholder", "Project Name");
inputText.classList.add("hidden");

// CONTENTS
const createContent = () => {
  const contentContainer = createElementWithClass("div", "items-container");
  contentContainer.append(inputText);
  return contentContainer;
};



const leftProjectContainer = () => {
  // main container of project names
  let left = createElementWithId("div", "left");
  left.classList.add("container-sides");
  // header-container

  // create container for all new projects and a way to create them
  left.appendChild(createHeader());
  left.appendChild(createContent());
  return left;
};

// ******************* right - side of container **********************

const rightProjectContainer = () => {
  let right = createElementWithId("div", "right");
  right.classList.add("container-sides");
  return right;
};

const projectsContainer = (() => {
  let projects = createElement("div");
  projects.setAttribute("id", "projects");

  projects.appendChild(leftProjectContainer());
  projects.appendChild(rightProjectContainer());
  return projects;
})();

// ********* EVENTS *******
icon.addEventListener("click", (e) => {
  inputText.classList.remove("hidden");
});

const homeLayout = (() => {
  const layout = createElement("div");
  layout.setAttribute("id", "layout");

  layout.append(projectsContainer);
  return layout;
})();

export { homeLayout, projectsContainer };
