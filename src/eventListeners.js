import { checkDueDate, showFormAndCover } from './utility';
import { onClickingRPB } from './setupTask';
import {
  addTask, resetForm, addProject, resetProjForm, resetConfForm,
} from './forms';

// it resets every time website refreshes so duplication bug occurs,
// and it's more efficient, (little bit lol

const addTaskBtn = document.querySelector('#addTask');
addTaskBtn.addEventListener('click', () => {
  showFormAndCover();
});

// thought it would easy to put all form related code to the submit btn listener
const gbutton = document.querySelector('.green');
gbutton.addEventListener('click', () => {
  addTask();
});

const form = document.querySelector('#taskForm');
form.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    addTask();
  }
});

const rbutton = document.querySelector('.red');
rbutton.addEventListener('click', () => {
  resetForm();
});

const addProjectBtn = document.querySelector('#addProject');
addProjectBtn.addEventListener('click', () => {
  const projForm = document.querySelector('#projectForm');
  projForm.style.display = 'flex';
  const cover = document.querySelector('.cover');
  cover.style.display = 'block';
});

const projGButton = document.querySelector('.proj_green');
projGButton.addEventListener('click', () => {
  addProject();
});

const projForm = document.querySelector('#projectForm');
projForm.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    addProject();
  }
});

const projRButton = document.querySelector('.proj_red');
projRButton.addEventListener('click', () => {
  resetProjForm();
});

const confGreen = document.querySelector('.conf_green');
confGreen.addEventListener('click', () => {
  onClickingRPB();
  resetConfForm();
});

const confRed = document.querySelector('.conf_red');
confRed.addEventListener('click', () => {
  resetConfForm();
});

// navigate calender, left and right arrow
const left = document.querySelector('.calLeft');
const right = document.querySelector('.calRight');
const input = document.querySelector('#date');
left.addEventListener('click', () => {
  input.stepDown();
  checkDueDate();
});
right.addEventListener('click', () => {
  input.stepUp();
  checkDueDate();
});
// date is picked manually from the calander, click doesn't work
input.addEventListener('change', () => {
  checkDueDate();
});
