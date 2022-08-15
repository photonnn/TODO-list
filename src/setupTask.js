import { eraseTaskD } from './dom.js';
import { eraseTask } from './todo.js';


let working_task, working_project;


// "Control" function
const setupTaskD = (task, project) => {
    working_task = task;
    working_project = project;
    
    uI();
    setupDeleteButton();
};

const uI = () => {
    const taskNode = document.querySelector(`.${working_task.id}`);

    const title = document.createElement("div");
    title.textContent = working_task.title;
    taskNode.appendChild(title);

    const desc = document.createElement("div");
    desc.textContent = working_task.description;
    taskNode.appendChild(desc);

    const dueDate = document.createElement("div");
    dueDate.textContent = "Due date: "  + working_task.dueDate;
    taskNode.appendChild(dueDate);

    const priority = document.createElement("div");
    priority.textContent = "Priority: " + working_task.priority;
    taskNode.appendChild(priority);
};


const setupDeleteButton = () => {
    const btn = document.createElement('button');
    btn.textContent = "Remove";

    const taskNode = document.querySelector(`.${working_task.id}`);
    taskNode.appendChild(btn);

    // maybe find a way to move
    btn.addEventListener('click', () => {
        eraseTask(working_project, working_task);
        eraseTaskD(working_task.id);
    });
};

export { setupTaskD };