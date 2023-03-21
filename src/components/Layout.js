import Project from "./Project";

const tastProject = new Project("My Todo List");
tastProject.add("Buy groceries", "Buy milk, bread and eggs", "2023-03-25", "High");
tastProject.add(
  "Pay bills",
  "Pay rent and electricity bills",
  "2023-04-01",
  "Medium"
);
tastProject.add(
  "Complete project",
  "Finish project before deadline",
  "2023-04-10",
  "High"
);


const displayProjectList = (list) => {
  const display = document.createElement('ul');
  Object.values(list.projectList).forEach((value) => {
    let item = document.createElement('li');
    item.textContent = value.name
    display.appendChild(item);
  })
  return display;
}


const Layout = () => {
  const homeLayout = document.createElement("div");
  homeLayout.append(displayProjectList(tastProject));
  return homeLayout;
};

export default Layout;
