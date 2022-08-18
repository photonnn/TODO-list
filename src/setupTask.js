import { eraseTaskD } from './dom.js';
import { showFormAndCover, resetForm } from './eventListeners.js';
import { deleteTask, projects } from './todo.js';
import { formatDate } from './date.js'

let working_task, working_project;


// "Control" function
const setupTaskD = (task, project) => {
    working_task = task; // object
    working_project = project; // name

    uI();
    setupEditButton();
    setupDeleteButton();
};

const uI = () => {
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

    // taskNode.appendChild(priority);

    taskNode.classList.add(`${working_task.priority}`)
};


const setupDeleteButton = () => {
    const btn = document.createElement('button');
    btn.textContent = "X";

    const div = document.querySelector(`.${working_task.id} .taskButtons`);
    div.appendChild(btn);

    // we need to obtain task object from the button itself
    // because if we use any variable it won't delete properly
    // this is done via matching btn class name which is equal to the id
    // of the task that we are seeking in a projects object
    btn.addEventListener('click', () => {
        const taskID = [...btn.parentNode.parentNode.classList][0];
        console.log(taskID);
        const currentProject = document.querySelector(".selected").textContent;
        const title = getTitle(taskID, currentProject);

        deleteTask(currentProject, projects[currentProject].tasks[title]);
        eraseTaskD(taskID);
    });
};

function getTitle(taskID, currentProject) {

    let title;
    for (let em in projects[currentProject].tasks) {
        if (projects[currentProject].tasks[em].id == taskID) {
            title = projects[currentProject].tasks[em].title;
        }
    }
    return title;
}

const setupEditButton = () => {
    const btn = document.createElement('button');
    btn.textContent = "Edit";

    const div = document.createElement("div");
    div.classList.add("taskButtons");

    const taskNode = document.querySelector(`.${working_task.id}`);
    taskNode.appendChild(div);
    div.appendChild(btn);

    btn.addEventListener('click', () => {
        const taskID = [...btn.parentNode.parentNode.classList][0];
        const currentProject = document.querySelector(".selected").textContent;
        const title = getTitle(taskID, currentProject);
        showFormAndCover();
        projects[currentProject].flag = true;
        setupEditForm(projects[currentProject].tasks[title]);

    });
};

function setupEditForm(task) {
    console.log(task);
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;

    // date doesn't work, fix!!!
    //document.getElementById("dueDate").value = formatDate(task.dueDate);
    document.getElementById("priority").value = task.priority;

    const gbutton = document.querySelector(".green");
    //task.add = false;
    gbutton.addEventListener('click', () => {
        const currentProject = document.querySelector(".selected").textContent;
        if (projects[currentProject].flag) {
            const temp = task.title;
            task.title = document.getElementById("title").value;

            // name of the object and the title are the same, this is why
            // if you edit the title name, the function can no longer find the
            // right object after deletion, hence deep copy and remove previous
            // one
            if (temp != task.title) {
                projects[currentProject].tasks[task.title] =
                    JSON.parse(JSON.stringify(projects[currentProject].tasks[temp]));
                delete projects[currentProject].tasks[temp];
            }
            task.description = document.getElementById("description").value;

            task.priority = document.getElementById("priority").value;
            //task.dueDate = document.getElementById("dueDate").value;

            resetForm();
            projects[currentProject].flag = false;
            // save to local when you add task or project
            localStorage.setItem('projects', JSON.stringify(projects));
            location.reload();
        }

    })

}

export { setupTaskD };