import { projects, todo, currentProject } from './todo.js';
import { addTaskD, changeProjectD } from './dom.js';


// rework later
const project = document.querySelector('.shortcut');
project.addEventListener('click', () => {
    project.classList.add("selected");
    changeProjectD(projects[1]);
});


const addTask = document.querySelector("#addTask");
addTask.addEventListener('click', () => {
    // currently default properties, later to be done via form
    const task = todo(prompt("Give me a title"), "Make it happen",
        "1. 1. 2024", "High");


    // when use clicks on a project, the 'currentProject' changes
    // I believe it to be easier to work rather than a property in object
    // that I wouldn't have to change the previous one to false
    projects[currentProject].tasks[task.title] = task;
    addTaskD(projects.home.tasks[task.title].description);



    //projects.home.push(todo("Random Task", "1. 1. 2020", "Normal"));
    //DOM.addTask(projects);
});