import { eraseTaskD } from './dom.js';
import { eraseTask } from './todo.js';


let working_task, working_project;


// "Control" function
const setupTaskD = (task, project) => {
    working_task = task;
    working_project = project;
    
    setupDeleteButton();
};

const setupDeleteButton = () => {
    const btn = document.createElement('button');
    btn.textContent = "Delete Me";

    const taskNode = document.querySelector(`.${working_task.id}`);
    taskNode.appendChild(btn);

    // maybe find a way to move
    btn.addEventListener('click', () => {
        eraseTask(working_project, working_task);
        eraseTaskD(working_task.id);
    });
};

export { setupTaskD };