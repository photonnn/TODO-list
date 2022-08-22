import { eraseTaskD, addProjectD, addTaskD, eraseTasksD } from "./dom";
import { projects } from "./todo";
import { getTitle, deleteTask, showFormAndCover } from "./utility";

const doUI = (workingTask) => {
  const taskNode = document.querySelector(`.${workingTask.id}`);

  const title = document.createElement("div");
  title.textContent = workingTask.title;
  title.classList.add("task_title");
  taskNode.appendChild(title);

  const desc = document.createElement("div");
  desc.textContent = workingTask.description;
  desc.classList.add("task_desc");
  taskNode.appendChild(desc);

  const dueDate = document.createElement("div");
  dueDate.textContent = `Due Date: ${workingTask.dueDate}`;
  dueDate.classList.add("task_dueDate");
  taskNode.appendChild(dueDate);

  taskNode.classList.add(`${workingTask.priority}`);
};

const setupDeleteButton = (workingTask) => {
  const btn = document.createElement("button");
  btn.textContent = "X";

  const div = document.querySelector(`.${workingTask.id} .taskButtons`);
  div.appendChild(btn);

  // we need to obtain task object from the button itself
  // because if we use any variable it won't delete properly
  // this is done via matching btn class name which is equal to the id
  // of the task that we are seeking in a projects object
  btn.addEventListener("click", (e) => {
    const taskID = [...e.target.parentNode.parentNode.classList][0];
    const title = getTitle(taskID);
    const currentProject = document.querySelector(".selected").textContent;
    deleteTask(currentProject, projects[currentProject].tasks[title]);
    eraseTaskD(taskID);
  });
};

function setupEditForm(title) {
  const currentProject = document.querySelector(".selected").textContent;
  // task = THE ONE BEING CLICKED
  const task = projects[currentProject].tasks[title];

  // fill the form correctly
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  let arr = task.dueDate.split("-");
  arr = [arr[2], arr[0], arr[1]].join("-");
  document.getElementById("dueDate").value = arr;
  document.getElementById("priority").value = task.priority;

  // delete, and let the green button build it for you, no in this case
  // should have a special function
  eraseTaskD(projects[currentProject].tasks[title].id);
  delete projects[currentProject].tasks[title];

  localStorage.setItem("projects", JSON.stringify(projects));

  const rbutton = document.querySelector(".red");
  rbutton.style.display = "none";

  const gbutton = document.querySelector(".green");
  gbutton.style.backgroundColor = "yellow";
  gbutton.textContent = "Edit";
}

const setupEditButton = (workingTask) => {
  const btn = document.createElement("button");
  btn.textContent = "Edit";

  const div = document.createElement("div");
  div.classList.add("taskButtons");

  const taskNode = document.querySelector(`.${workingTask.id}`);
  taskNode.appendChild(div);
  div.appendChild(btn);

  btn.addEventListener("click", (e) => {
    showFormAndCover();
    setupEditForm(getTitle([...e.target.parentNode.parentNode.classList][0]));
  });
};

// "Control" function
export function setupTaskD(task) {
  doUI(task);
  setupEditButton(task);
  setupDeleteButton(task);
}

export function showConfirmationForm() {
  const form = document.querySelector("#confirmationForm");
  form.style.display = "flex";
  const cover = document.querySelector(".cover");
  cover.style.display = "block";
}

// RPB - remove project button
export function addRPB() {
  const header = document.querySelector(".header");
  if (header.lastChild.textContent !== "X") {
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("RPB");
    delBtn.addEventListener("click", () => {
      showConfirmationForm();
    });
    header.appendChild(delBtn);
  }
}

export function removeRPB() {
  const header = document.querySelector(".header");
  const rpb = document.querySelector(".RPB");
  if (rpb) {
    header.removeChild(rpb);
  }
}

// felt like this deserves a seperate module, since it's not really DOM manip.
export const changeProjectD = (projectName) => {
  eraseTasksD();
  if (projects[projectName].tasks !== {}) {
    Object.keys(projects[projectName].tasks).forEach((em) => {
      addTaskD(projects[projectName].tasks[em]);
      setupTaskD(projects[projectName].tasks[em], projectName);
    });
  }

  if (projectName !== "HOME") {
    addRPB();
  } else {
    removeRPB();
  }
};

export function addProjectListener(id) {
  const project = document.getElementById(`${id}`);

  project.addEventListener("click", () => {
    const temp = document.querySelector(".selected");
    temp.classList.remove("selected");
    project.classList.add("selected");
    if (window.innerWidth < "1024") {
      const sidebar = document.querySelector("#sidebar");
      const mobileBtn = document.querySelector(".mobile");
      sidebar.style.display = "none";
      mobileBtn.style.display = "initial";
    }
    changeProjectD(project.textContent);
  });
}

export function onClickingRPB() {
  // first check if you actually want to delete
  // get id, delete on content and then sidebar using id. return to home
  const projectName2 = document.querySelector(".selected").textContent;
  const projectID = projects[projectName2].id;
  delete projects[projectName2];
  const project = document.querySelector(`#${projectID}`);
  project.remove();

  const home = document.querySelector("#Pr0");
  home.classList.add("selected");
  changeProjectD("HOME");

  // save because you removed a project
  localStorage.setItem("projects", JSON.stringify(projects));
}

addProjectListener("Pr0");

// load all projects and tasks from the local storage
export const loadFromStorage = () => {
  Object.keys(projects).forEach((project) => {
    if (project !== "HOME") {
      addProjectD(projects[project], projects[project].id);
      addProjectListener(projects[project].id);
    }
  });

  Object.keys(projects.HOME.tasks).forEach((task) => {
    addTaskD(projects.HOME.tasks[task]);
    setupTaskD(projects.HOME.tasks[task], "HOME");
  });
};

// Previous setupProject and setupTask have merged due to eslint shouting at me
// for dependency cycle errors. I have merged them together into this setup
// file. Ideally I would find another way to spit this module into more pieces,
// this would all have been easier, if I had used eslint from start, so work to
// be done here, if more code is to be included, especially code that is related
// to any kind of setup.
