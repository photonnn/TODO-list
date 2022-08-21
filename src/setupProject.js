/* import { projects } from './todo';
import { eraseTasksD, addTaskD } from './dom';

export function showConfirmationForm() {
  const form = document.querySelector('#confirmationForm');
  form.style.display = 'flex';
  const cover = document.querySelector('.cover');
  cover.style.display = 'block';
}

// RPB - remove project button
export function addRPB() {
  const header = document.querySelector('.header');
  if (header.lastChild.textContent !== 'X') {
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.classList.add('RPB');
    delBtn.addEventListener('click', () => {
      showConfirmationForm();
    });
    header.appendChild(delBtn);
  }
}

export function removeRPB() {
  const header = document.querySelector('.header');
  const rpb = document.querySelector('.RPB');
  if (rpb) { header.removeChild(rpb); }
}

export function onClickingRPB() {
  // first check if you actually want to delete
  // get id, delete on content and then sidebar using id. return to home
  const projectName2 = document.querySelector('.selected').textContent;
  const projectID = projects[projectName2].id;
  delete projects[projectName2];
  const project = document.querySelector(`#${projectID}`);
  project.remove();

  const home = document.querySelector('#Pr0');
  home.classList.add('selected');
  changeProjectD('HOME');

  // save because you removed a project
  localStorage.setItem('projects', JSON.stringify(projects));
}

export function addProjectListener(id) {
  const project = document.getElementById(`${id}`);

  project.addEventListener('click', () => {
    const temp = document.querySelector('.selected');
    temp.classList.remove('selected');
    project.classList.add('selected');
    if (window.innerWidth < '1024') {
      const sidebar = document.querySelector('#sidebar');
      const mobileBtn = document.querySelector('.mobile');
      sidebar.style.display = 'none';
      mobileBtn.style.display = 'initial';
    }
    changeProjectD(project.textContent);
  });
}

addProjectListener('Pr0');

// felt like this deserves a seperate module, since it's not really DOM manip.
export const changeProjectD = (projectName) => {
  eraseTasksD();
  if (projects[projectName].tasks != {}) {
    for (let em in projects[projectName].tasks) {
      addTaskD(projects[projectName].tasks[em]);
      setupTaskD(projects[projectName].tasks[em], projectName);
    }
  }
  if (projectName !== 'HOME') {
    addRPB();
  } else {
    removeRPB();
  }
};
 */
