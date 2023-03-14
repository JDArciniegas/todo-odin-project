import Project from "./Project";
import Task  from "./Task";
const DOM = (() => {

  // function to create new element
  const createElement = (element) => {
    return document.createElement(element);
  }

  // function to add class name to new elements
  const addClassToElement = (element, className) => {
    element.classList.add(className);
  }


  const taskContainer = createElement('div');

  const projectContainer = createElement('div');


  const DOMContainer = createElement('div');
  addClassToElement(DOMContainer, 'container')
  DOMContainer.appendChild(projectContainer);
  DOMContainer.appendChild(taskContainer);
  return DOMContainer

})();

export default DOM;
