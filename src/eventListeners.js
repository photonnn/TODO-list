import { changeProjectD, checkDueDate } from './utility.js';
import { onClickingRPB } from './setupProject.js'
import {showFormAndCover, addTask, resetForm, addProject, resetConfForm, 
    resetProjForm } from './forms.js';

// it resets every time website refreshes so duplication bug occurs,
// and it's more efficient, (little bit lol)

const addTaskBtn = document.querySelector("#addTask");
addTaskBtn.addEventListener('click', () => {
    showFormAndCover();
});

// thought it would easy to put all form related code to the submit btn listener
const gbutton = document.querySelector(".green");
gbutton.addEventListener('click', () => {
    addTask();
});

const form = document.querySelector("#taskForm");
form.addEventListener('keydown', (e) => {
    if (e.code == "Enter") {
        addTask();
    }
});

const rbutton = document.querySelector(".red");
rbutton.addEventListener('click', () => {
    resetForm();
});

const addProjectBtn = document.querySelector("#addProject");
addProjectBtn.addEventListener('click', () => {
    const projForm = document.querySelector("#projectForm")
    projForm.style.visibility = "visible";
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
});

const proj_gbutton = document.querySelector(".proj_green");
proj_gbutton.addEventListener('click', () => {
    addProject();
});

const projForm = document.querySelector("#projectForm");
projForm.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        addProject();
    }
})

const proj_rbutton = document.querySelector(".proj_red");
proj_rbutton.addEventListener('click', () => {
    resetProjForm();
});

const conf_green = document.querySelector(".conf_green");
conf_green.addEventListener('click', () => {
    onClickingRPB();
    resetConfForm();
});

const conf_red = document.querySelector(".conf_red");
conf_red.addEventListener('click', () => {
    resetConfForm();
})

// add ID to each project and then ???
export const addProjectListener = (id) => {
    const project = document.getElementById(`${id}`);

    project.addEventListener('click', () => {
        const temp = document.querySelector('.selected');
        temp.classList.remove("selected");
        project.classList.add("selected");
        changeProjectD(project.textContent);
    });
}

addProjectListener("Pr0");

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
    console.log("what");
    checkDueDate();
})