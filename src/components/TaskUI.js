const findTasks = (projects, target) => {
  projects.forEach((project) => {
    if (project.name.toLowerCase() === target) {
      console.log(project.projectList);
    }
  });
};

export { findTasks };
