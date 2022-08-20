import { eraseTasksD, addTaskD, addProjectD } from './dom.js';
import { setupTaskD } from './setupTask.js';
import { projects } from './todo.js';
import { addProjectListener } from './eventListeners.js';
import { addRPB, removeRPB } from './setupProject';
import { expireCheck } from './date.js'


// felt like this deserves a seperate module, since it's not really DOM manip.
export const changeProjectD = (projectName) => {
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


// load all projects and tasks from the local storage
export const loadFromStorage = () => {
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

export function checkDueDate() {
    const currentProject = document.querySelector(".selected").textContent;
    for (let em in projects[currentProject].tasks) {
        const div = document.querySelector(`.${projects[currentProject].tasks[em].id
            }`);
        if (expireCheck(projects[currentProject].tasks[em])) {
            div.classList.add("expired");
        } else {
            div.classList.remove("expired");
        }
    }
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
    for (let em in projects[currentProject].tasks) {
        if (projects[currentProject].tasks[em].id == taskID) {
            title = projects[currentProject].tasks[em].title;
        }
    }
    return title;
}

export function deleteTask(project, task) {
    console.log(project);
    delete projects[project].tasks[task.title];
    // we are actually deleting, not just erasing from screen!!!
    localStorage.setItem('projects', JSON.stringify(projects));
}