// function to create new element
const createElement = (element) => {
  return document.createElement(element);
};

// function to add class name to new elements
const addClassToElement = (element, className) => {
  element.classList.add(className);
};

const createHeader = () => {
  const header = createElement("div");
  addClassToElement(header, "header");
  header.textContent = "Todo List";
  return header;
};

const projectsContainer = (() => {
  const container = createElement("div");
  return container
})();

const homeLayout = (() => {
  const layout = createElement("div");
  layout.setAttribute("id", "layout");

  layout.append(createHeader());
  layout.append(projectsContainer);

  return layout;
})();

export { homeLayout, projectsContainer };
