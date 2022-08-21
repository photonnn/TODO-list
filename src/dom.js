import { expireCheck } from './date';

export const addTaskD = (task) => {
  const div = document.createElement('div');
  div.classList.add(`${task.id}`);

  if (expireCheck(task)) {
    div.classList.add('expired');
  } else {
    div.classList.remove('expired');
  }

  const tasks = document.querySelector('#tasks');
  tasks.appendChild(div);
};

export const eraseTasksD = () => {
  const tasks = document.querySelector('#tasks');
  while (tasks.firstChild) {
    tasks.removeChild(tasks.lastChild);
  }
};

export const eraseTaskD = (id) => {
  const task = document.querySelector(`.${id}`);
  task.remove();
};

export const addProjectD = (project, id) => {
  const div = document.createElement('div');
  div.classList.add('shortcut');
  div.id = id;
  div.textContent = project.title;

  const shortcuts = document.querySelector('.shortcuts');
  shortcuts.append(div);
};

// D at the end represents DOM
