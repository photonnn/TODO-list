import { projects } from "./todo";
import { expireCheck } from "./date";

export function checkDueDate() {
  const currentProject = document.querySelector(".selected").textContent;
  Object.keys(projects[currentProject].tasks).forEach((taskName) => {
    const div = document.querySelector(
      `.${projects[currentProject].tasks[taskName].id}`
    );
    if (expireCheck(projects[currentProject].tasks[taskName])) {
      div.classList.add("expired");
    } else {
      div.classList.remove("expired");
    }
  });

  /*
    const content = document.querySelector("#content");
    if (proj_expireCheck()) {
        content.style.borderTop = "1vh red solid";
        content.style.borderLeft = "1vh red solid";
    } else {
        content.style.border = "none";
    } */
}

export function getTitle(taskID) {
  const currentProject = document.querySelector(".selected").textContent;
  let title;

  Object.keys(projects[currentProject].tasks).forEach((taskName) => {
    if (projects[currentProject].tasks[taskName].id === taskID) {
      title = projects[currentProject].tasks[taskName].title;
    }
  });
  return title;
}

export function deleteTask(project, task) {
  delete projects[project].tasks[task.title];
  // we are actually deleting, not just erasing from screen!!!
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function showFormAndCover() {
  const form = document.querySelector("#taskForm");
  const cover = document.querySelector(".cover");
  cover.style.display = "block";
  form.style.display = "flex";
}
