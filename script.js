const taskName = document.getElementById("taskName");
const taskSubmit = document.getElementById("taskSubmit");

taskSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(taskName.value);
  if (taskName.value == "") {
    alert("Task Name is Empty");
    return;
  }
  addTask(taskName.value);
  taskName.value = "";
});

function addTask(taskName) {
  const newTask = document.createElement("div");
  newTask.classList.add("task");

  const newTaskDiv = document.createElement("div");
  newTaskDiv.classList.add("taskItem");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "taskCheck";

  const taskP = document.createElement("p");
  taskP.classList.add("taskText");
  taskP.innerText = taskName;

  newTaskDiv.appendChild(input);
  newTaskDiv.appendChild(taskP);

  const taskD = document.createElement("div");
  taskD.classList.add("taskDelete");

  const taskDImg = document.createElement("img");
  taskDImg.src = "./Images/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
  taskDImg.classList.add("deleteIcon");

  taskD.appendChild(taskDImg);

  taskD.addEventListener("click", (event) => {
    newTask.remove();
  });

  newTask.appendChild(newTaskDiv);
  newTask.appendChild(taskD);
  const taskList = document.getElementById("taskList");
  console.log(newTask);
  taskList.appendChild(newTask);
}
