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
  taskContainer.textContent = 'test'

  const projectContainer = createElement('div');
  projectContainer.textContent = "jajaja"

  const DOMContainer = createElement('div');
  addClassToElement(DOMContainer, 'container')
  DOMContainer.appendChild(projectContainer);
  DOMContainer.appendChild(taskContainer);
  return DOMContainer

})();

export default DOM;
