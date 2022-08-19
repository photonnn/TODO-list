import { eraseTaskD } from './dom.js';
import { showFormAndCover } from './forms.js';
import { projects } from './todo.js';
import { getTitle, deleteTask } from './utility.js'


// "Control" function
export const setupTaskD = (task) => {
    doUI(task);
    setupEditButton(task);
    setupDeleteButton(task);
};

const doUI = (working_task) => {
    const taskNode = document.querySelector(`.${working_task.id}`);

    const title = document.createElement("div");
    title.textContent = working_task.title;
    title.classList.add("task_title");
    taskNode.appendChild(title);

    const desc = document.createElement("div");
    desc.textContent = working_task.description;
    desc.classList.add("task_desc");
    taskNode.appendChild(desc);

    const dueDate = document.createElement("div");
    dueDate.textContent = "Due Date: " + working_task.dueDate;
    dueDate.classList.add("task_dueDate");
    taskNode.appendChild(dueDate);

    taskNode.classList.add(`${working_task.priority}`)
};


const setupDeleteButton = (working_task) => {
    const btn = document.createElement('button');
    btn.textContent = "X";

    const div = document.querySelector(`.${working_task.id} .taskButtons`);
    div.appendChild(btn);

    // we need to obtain task object from the button itself
    // because if we use any variable it won't delete properly
    // this is done via matching btn class name which is equal to the id
    // of the task that we are seeking in a projects object
    btn.addEventListener('click', (e) => {
        const taskID = [...e.target.parentNode.parentNode.classList][0];
        const title = getTitle(taskID);
        const currentProject = document.querySelector(".selected").textContent;
        deleteTask(currentProject, projects[currentProject].tasks[title]);
        eraseTaskD(taskID);
    });
};

const setupEditButton = (working_task) => {
    const btn = document.createElement('button');
    btn.textContent = "Edit";

    const div = document.createElement("div");
    div.classList.add("taskButtons");

    const taskNode = document.querySelector(`.${working_task.id}`);
    taskNode.appendChild(div);
    div.appendChild(btn);

    btn.addEventListener('click', (e) => {
        showFormAndCover();
        setupEditForm(
            getTitle([...e.target.parentNode.parentNode.classList][0]));
    });
};

function setupEditForm(title) {
    const currentProject = document.querySelector(".selected").textContent;
    // task = THE ONE BEING CLICKED
    const task = projects[currentProject].tasks[title];

    // fill the form correctly
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    let arr = task.dueDate.split("-");
    arr = [arr[2], arr[0], arr[1]].join("-");
    document.getElementById("dueDate").value = arr;
    document.getElementById("priority").value = task.priority;

    // delete, and let the green button build it for you, no in this case
    // should have a special function
    eraseTaskD(projects[currentProject].tasks[title].id)
    delete projects[currentProject].tasks[title];

    localStorage.setItem('projects', JSON.stringify(projects));

    const rbutton = document.querySelector(".red");
    rbutton.style.display = "none";

    const gbutton = document.querySelector(".green");
    gbutton.style.backgroundColor = "yellow";
    gbutton.textContent = "Edit"
}