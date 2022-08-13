let currentProject = "home";
const projects = {
    home: {
        tasks: {
            // example
            title: {
                title: "Default",
                description: "Default",
                dueDate: "1. 1. 2023",
                priority: "High",
            }
        },
    },
    1: {
        tasks: {
            presneto: {
                title: "Presneto",
                description: "Danes je sreda",
                dueDate: "1. 1. 2028",
                priority: "Must",
            },
            avgust: {
                title: "AVGUSTUS",
                description: "A se ti je ze zmesal",
                dueDate: "1. 5. 2024",
                priority: "Low",
            }
        }
    }
};

const todo = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};

function eraseTask(project, task) {
    delete projects[project].tasks[task];
}

// temp
export { projects, todo, currentProject }