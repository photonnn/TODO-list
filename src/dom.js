const addTaskD = (task) => {
    const div = document.createElement("div");
    div.classList.add(`${task.id}`);
    div.textContent = task.description;

    const tasks = document.querySelector("#tasks");
    tasks.appendChild(div);
};

const eraseTasksD = () => {
    const tasks = document.querySelector("#tasks");
    while (tasks.firstChild) {
        tasks.removeChild(tasks.lastChild);
    }
};

const eraseTaskD = (id) => {
    const task = document.querySelector(`.${id}`);
    task.remove();
};

const addProjectD = (project, id) => {
    const div = document.createElement("div");
    div.classList.add("shortcut");
    div.id = id;
    div.textContent = project.title;

    const shortcuts = document.querySelector(".shortcuts");
    shortcuts.append(div);
};

export { addTaskD, eraseTasksD, eraseTaskD, addProjectD };

// D at the end represents DOM
