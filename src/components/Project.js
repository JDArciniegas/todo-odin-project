class Project {
  constructor(name) {
    this.name = name;
    this.projectTasks = [];
  }


}

// create prototype to add Tasks to Project
Project.prototype.addtask = function(task){
  this.projectTasks.push(task);
}

// crate prototype to extract unique id for Task;


export default Project;
