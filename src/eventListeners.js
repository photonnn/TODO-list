import { projectFactory, projects, todo } from './todo.js';
import { addProjectD, addTaskD } from './dom.js';
import { changeProjectD } from './control.js';
import { setupTaskD } from './setupTask.js';

let id = 1;
// add a task to the currently selected project
const addTask = document.querySelector("#addTask");
addTask.addEventListener('click', () => {
    // currently default properties, later to be done via form
    const task = todo(prompt("Give me a title"), "Make it happen",
        "1. 1. 2024", "High", "task" + id.toString());
    id++;
    const currentProject = document.querySelector(".selected").textContent;
    projects[currentProject].tasks[task.title] = task;
    addTaskD(task, currentProject);
    setupTaskD(task, currentProject);

    //projects.home.push(todo("Random Task", "1. 1. 2020", "Normal"));
    //DOM.addTask(projects);
});

let projectID = 1;
const addProject = document.querySelector("#addProject");
addProject.addEventListener('click', () => {
    const title = prompt("Title name");
    if (projects[title]) {
        alert("ERROR ALREADY EXISTS");
    } else {
        const project = projectFactory(title, "21. 11. 2030",
            "High", "Pr" + projectID.toString());

        projects[project.title] = {};
        projects[project.title].tasks = {};
        projects[project.title].id = project.id;
        projectID++;

        addProjectD(project, project.id);
        addProjectListener(project.id);
    }
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