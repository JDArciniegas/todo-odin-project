import Project from "./Project";

// header icon
let icon = document.createElement("span");
icon.classList.add("material-symbols-outlined");
icon.setAttribute("id", "addIcon");
icon.innerText = "Add";

// input field
const inputText = document.createElement("input");
inputText.setAttribute("placeholder", "Project Name");
inputText.classList.add("hidden");

const createHeader = () => {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  // header-container contents
  const taskHeader = document.createElement("h1");
  taskHeader.innerText = "Projects";

  // -----
  headerContainer.appendChild(taskHeader);
  headerContainer.append(icon);
  return headerContainer;
};

// CONTENTS
const createContent = () => {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("items-container");
  return contentContainer;
};

const leftProjectContainer = () => {
  // main container of project names
  let left = document.createElement("div");
  left.setAttribute("id", "left");
  left.classList.add("container-sides");
  // header-container

  // create container for all new projects and a way to create them
  left.appendChild(createHeader());
  left.appendChild(createContent());
  return left;
};

export default leftProjectContainer;
