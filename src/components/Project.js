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

  remove(index) {
    this.projectList.splice(index, 1);
  }

  complete(index) {
    const task = this.projectList[index];
    task.complete();
  }
}

export default Project;
