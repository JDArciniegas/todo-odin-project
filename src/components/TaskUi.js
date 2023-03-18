

const rightProjectContainer = () => {
  let right = document.createElement("div");
  right.setAttribute("id", "right");
  right.classList.add("container-sides");
  right.textContent = "this is the right";
  return right;
};

export default rightProjectContainer;
