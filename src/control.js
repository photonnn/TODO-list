import { eraseTasksD, addTaskD, addProjectD } from './dom.js';
import { setupTaskD } from './setupTask.js';
import { projects } from './todo.js';
import { addProjectListener } from './eventListeners.js';


// erase and add proper tasks when switching project
const changeProjectD = (projectName) => {
    eraseTasksD();
    if (projects[projectName].tasks != {}) {
        for (let em in projects[projectName].tasks) {
            addTaskD(projects[projectName].tasks[em]);
            setupTaskD(projects[projectName].tasks[em], projectName);
        }
    }
    if (projectName != "HOME") {
        addRPB();
    } else {
        removeRPB();
    }
};

// RPB - remove project button
function addRPB() {
    const header = document.querySelector(".header");
    if (header.lastChild.textContent != "X") {
        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.classList.add("RPB");
        delBtn.addEventListener('click', () => {
            showConfirmationForm();
        });
        header.appendChild(delBtn);
    }
}

function showConfirmationForm() {
    const form = document.querySelector("#confirmationForm");
    form.style.visibility = "visible";
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
}

function removeRPB() {
    const header = document.querySelector(".header");
    header.lastChild.remove();
}

function onClickingRPB() {
    // first check if you actually want to delete
    // get id, delect content and then sidebar using id. return to home
    const projectName2 = document.querySelector(".selected").textContent;
    const projectID = projects[projectName2].id;
    delete projects[projectName2];
    const project = document.querySelector(`#${projectID}`)
    project.remove();
    console.log(projects);

    const home = document.querySelector("#Pr0");
    home.classList.add("selected");
    changeProjectD("HOME");

    // save because you removed a project
    localStorage.setItem('projects', JSON.stringify(projects));
}


// load all projects and tasks from the local storage
const loadFromStorage = () => {
    for (let project in projects) {
        if (project != "HOME") {
            addProjectD(projects[project], projects[project].id);
            addProjectListener(projects[project].id);
        }
    }

    for (let task in projects.HOME.tasks) {
        addTaskD(projects.HOME.tasks[task]);
        setupTaskD(projects.HOME.tasks[task], "HOME");
    }
};

export { changeProjectD, loadFromStorage, onClickingRPB };