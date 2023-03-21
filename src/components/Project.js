import Task from "./Task";

class Project {
  constructor(name) {
    this.name = name;
    this.projects = [];
  }

  add(name, description, dueDate, priority) {
    const task = new Task(name, description, dueDate, priority);
    this.projects.push(task);
  }

  remove(index) {
    this.projects.splice(index, 1);
  }

  complete(index) {
    const task = this.projects[index];
    task.complete();
  }
}

export default Project;
