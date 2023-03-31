import Task from "./Task";

class Project {
  constructor(name) {
    this.name = name;
    this.projectList = [];
  }

  add(name, description, dueDate, priority) {
    const task = new Task(name, description, dueDate, priority);
    this.projectList.push(task);
  }
}

export default Project;
