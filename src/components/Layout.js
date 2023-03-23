import ProjectUI from "./ProjectUI";
const addTaskButton = document.querySelector('#add-task');

const taskForm = document.querySelector('#task-form');

const taskContainer = document.querySelector('#project-task');

addTaskButton.addEventListener('click', (e) => {
  taskForm.classList.remove('hidden')
})

const Layout = () => {
  ProjectUI();
};

export default Layout;
