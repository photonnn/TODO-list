const addTaskD = (description) => {
    const div = document.createElement("div");
    div.classList.add("task");
    div.textContent = description;

    const tasks = document.querySelector("#tasks");
    tasks.appendChild(div);
};

const changeProjectD = (project) => {
    eraseTasksD();
    for (let em in project.tasks) {
        console.log(em);
        addTaskD(project.tasks[em].description);
    }
    return project;
};

const eraseTasksD = () => {
    const tasks = document.querySelector("#tasks");
    while (tasks.firstChild) {
        tasks.removeChild(tasks.lastChild);
    }
};

export { addTaskD, changeProjectD };

// D at the end represents DOM
