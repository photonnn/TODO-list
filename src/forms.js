import { addProjectD, addTaskD } from './dom';
import { setupTaskD, addProjectListener } from './setup';
import { projectFactory, projects, todo } from './todo';
import { formatDate, getDate } from './date';

export function resetForm() {
  const form = document.querySelector('#taskForm');
  const cover = document.querySelector('.cover');
  form.reset();
  form.style.display = 'none';
  cover.style.display = 'none';

  // this is also default, present in date.js!
  const dueDate = document.getElementById('dueDate');
  dueDate.value = getDate();
}

// couldn't get submit type button to work, so needed a function to get values
// from the form, this is it
function getTask() {
  const title = document.getElementById('title').value;
  const currentProject = document.querySelector('.selected').textContent;
  if (!projects[currentProject].tasks[title]) {
    const description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (!dueDate) {
      dueDate = getDate();
    }

    let id = 0;
    // easiest way to prevent duplication bug => 2 tasks 1 id
    Object.keys(projects[currentProject].tasks).forEach((taskName) => {
      id = Math.max(id, Number(projects[currentProject].tasks[taskName].id
        .replace('task', '')) + 1);
    });

    const task = todo(
      title,
      description,
      formatDate(dueDate),
      priority,
      `task${id.toString()}`,
    );
    return task;
  }
  return 0;
}

export const addTask = () => {
  // run only if not editing, we have 2 event listners on one button
  // so this forces the other one to work alone, which is what we want
  const currentProject = document.querySelector('.selected').textContent;
  // bugs occur if flag isn't present, since after I am using two
  // event listners for one button
  const task = getTask();

  if (task === 0) {
    // eslint-disable-next-line no-alert
    alert('Failure, task with the same title already exists');
  }
  if (task) {
    resetForm();
    // set default date, so MM-DD-YYYY is not shown on form?????
    const dueDate = document.getElementById('dueDate');
    dueDate.value = getDate();

    // setup task
    projects[currentProject].tasks[task.title] = task;
    addTaskD(task, currentProject);
    setupTaskD(task);

    const rbutton = document.querySelector('.red');
    rbutton.style.display = 'flex';

    const gbutton = document.querySelector('.green');
    gbutton.style.backgroundColor = 'rgb(47, 255, 47)';
    gbutton.textContent = 'Add';

    // attempt at "refreshing" the height, because it sometimes forgets
    // it needs to be 100vh on mobile browsers >-.-<
    // const sidebar = document.querySelector('#sidebar');
    // sidebar.style.height = '100vh';

    // const content = document.querySelector('#content');
    // content.style.height = '100vh';

    // save to local when you add task or project
    localStorage.setItem('projects', JSON.stringify(projects));
  }
};

// similar problem as task id
// let projectID = Object.keys(projects).length;

// againt, needed a way to get values from the form
function getProject() {
  const title = document.getElementById('proj_title').value;
  if (!projects[title]) {
    // const dueDate = document.getElementById("proj_dueDate").value;

    let projectID = 0;
    // easiest way to prevent duplication bug => 2 projects 1 id
    Object.keys(projects).forEach((project) => {
      projectID = Math.max(projectID, Number(projects[project].id
        .replace('Pr', '')) + 1);
    });
    const proj = projectFactory(
      title,
      /* dueDate, */
      `Pr${projectID.toString()}`,
    );
    return proj;
  }
  return 0;
}

export function resetProjForm() {
  const form = document.querySelector('#projectForm');
  const cover = document.querySelector('.cover');
  document.getElementById('proj_title').value = '';
  // document.getElementById("proj_dueDate").value = "";
  form.style.display = 'none';
  cover.style.display = 'none';

  // this is also default, present in date.js!
  // const dueDate = document.getElementById("proj_dueDate");
  // dueDate.value = getDate();
}

export const addProject = () => {
  const project = getProject();
  if (!project) {
    // eslint-disable-next-line no-alert
    alert("Failure, can't repeat project name");
  } else {
    resetProjForm();
    projects[project.title] = project;
    projects[project.title].tasks = {};
    projects[project.title].id = project.id;

    addProjectD(project, project.id);
    addProjectListener(project.id);

    // save to local when you add task or project
    localStorage.setItem('projects', JSON.stringify(projects));
  }
};

export function resetConfForm() {
  const confForm = document.querySelector('#confirmationForm');
  confForm.style.display = 'none';
  const cover = document.querySelector('.cover');
  cover.style.display = 'none';
}
