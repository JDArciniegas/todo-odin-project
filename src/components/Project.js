class Project {
  constructor(name) {
    this.name = name;
    this.projectTasks = [];
  }
}

// create prototype to add Tasks to Project
Project.prototype.addTask = function(task){
  return this.projectTasks.push(task);
}

export default Project;
