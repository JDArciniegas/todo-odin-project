import Task from "./components/Task";
import Project from "./components/Project";

const newTask = new Task("laundry", "doing laundry", "now", "high");
const newTask1 = new Task("dishes", "doing laundry", "now", "high");
const newTask2 = new Task("tv", "doing laundry", "now", "high");
const newTask3 = new Task("car", "doing laundry", "now", "high");

const todayTasks = new Project("Today");
// todayTasks.projectTasks.push(newTask);
// todayTasks.projectTasks.push(newTask1);
// todayTasks.projectTasks.push(newTask2);
// todayTasks.projectTasks.push(newTask3);
todayTasks.addtask(newTask);
todayTasks.addtask(newTask1);
todayTasks.addtask(newTask2);
todayTasks.addtask(newTask3);

Object.values(todayTasks.projectTasks).forEach((item, index) => {
  item.id = index
  console.log((item.id));
  console.log(item);
})





document.getElementById("content");
