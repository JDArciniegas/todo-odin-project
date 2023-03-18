import Project from "./Project";
const leftProjectContainer = () => {
  // container for all Projects
  let allProjects = [];

  // header icon
  let icon = document.createElement("span");
  icon.classList.add("material-symbols-outlined");
  icon.setAttribute("id", "addIcon");
  icon.innerText = "Add";

  // new project form
  let form = document.createElement("form");
  form.style.display = "none";
  let inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  let submitInput = document.createElement("input");
  submitInput.setAttribute("type", "submit");
  form.appendChild(inputField);
  form.appendChild(submitInput);

  const projectList = document.createElement("ul");
  // add item to list
  const addItemToList = () => {
    let listItem = document.createElement("li");
    let newProject = new Project(`${inputField.value}`);
    listItem.textContent = newProject.name;
    projectList.appendChild(listItem);
  };

  // clear form
  const clearForm = () => {
    inputField.value = "";
    form.style.display = "none";
  };

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
    contentContainer.appendChild(form);
    contentContainer.appendChild(projectList);
    return contentContainer;
  };

  // EVENTS
  icon.addEventListener("click", (e) => {
    form.style.display = "block";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addItemToList();
    clearForm();
  });

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
