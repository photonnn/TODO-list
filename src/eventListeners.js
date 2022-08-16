import { projectFactory, projects, todo } from './todo.js';
import { addProjectD, addTaskD } from './dom.js';
import { changeProjectD } from './control.js';
import { setupTaskD } from './setupTask.js';

let id = 1;
// add a task to the currently selected project
const addTask = document.querySelector("#addTask");
addTask.addEventListener('click', () => {
    const form = document.querySelector("form");
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
    form.style.visibility = "visible";
});

const gbutton = document.querySelector(".green");
gbutton.addEventListener('click', () => {
    const task = getTask();
    if (!task) {
        alert("failure, you can't repeat a task title")
    } else {
        resetForm();

        // setup task
        const currentProject = document.querySelector(".selected").textContent;
        projects[currentProject].tasks[task.title] = task;
        addTaskD(task, currentProject);
        setupTaskD(task, currentProject);


        // save to local when you add task or project
        localStorage.setItem('projects', JSON.stringify(projects));
    }
    console.log(projects);
});

function resetForm() {
    const form = document.querySelector("form");
    const cover = document.querySelector(".cover");
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "";
    form.style.visibility = "hidden";
    cover.style.display = "none";
}

const rbutton = document.querySelector(".red");
rbutton.addEventListener('click', () => {
    resetForm();
});

function getTask() {
    const title = document.getElementById("title").value;
    const currentProject = document.querySelector(".selected").textContent;
    if (!projects[currentProject].tasks[title]) {
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("dueDate").value;
        const priority = document.getElementById("priority").value;

        const task = todo(title, description, dueDate, priority, "task" +
            id.toString());
        id++;
        return task;
    } else {
        return 0;
    }
}

let projectID = Object.keys(projects).length;
const addProject = document.querySelector("#addProject");
addProject.addEventListener('click', () => {
    const title = prompt("Title name");
    if (projects[title]) {
        alert("ERROR ALREADY EXISTS");
    } else {
        const project = projectFactory(title, "21. 11. 2030",
            "High", "Pr" + projectID.toString());
        projects[project.title] = project;
        projects[project.title].tasks = {};
        projects[project.title].id = project.id;
        projectID++;

        addProjectD(project, project.id);
        addProjectListener(project.id);
    }

    // save to local when you add task or project
    localStorage.setItem('projects', JSON.stringify(projects));
});

// add ID to each project and then 
const addProjectListener = (id) => {
    const project = document.getElementById(`${id}`);

    project.addEventListener('click', () => {
        const temp = document.querySelector('.selected');
        temp.classList.remove("selected");
        project.classList.add("selected");
        changeProjectD(project.textContent);
    });
}

addProjectListener("Pr0");

// navigate calender
const left = document.querySelector('.calLeft');
const right = document.querySelector('.calRight');
const input = document.querySelector('#date');
left.addEventListener('click', () => {
    input.stepDown();
});
right.addEventListener('click', () => {
    input.stepUp();
});

export { addProjectListener }