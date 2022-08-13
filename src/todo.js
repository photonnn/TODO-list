const projects = {
    HOME: {
        tasks: {
            // example
            //title: {
              //  title: "Default",
               // description: "Default",
               // dueDate: "1. 1. 2023",
               // priority: "High",
            //}
        },
        id: "Pr0",
    },
};

const todo = (title, description, dueDate, priority, id) => {
    return { title, description, dueDate, priority, id };
};

function eraseTask(project, task) {
    delete projects[project].tasks[task.title];
}

const projectFactory = (title, dueDate, priority, id) => {
    return { title, dueDate, priority, id};
};

// temp
export { projects, todo, eraseTask, projectFactory }