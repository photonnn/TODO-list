import './style.css';

console.log("Hello World");

const TODO = (() => {
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

    const addTask = document.querySelector("#addTask");
    addTask.addEventListener('click', () => {
        // const title = ... get from DOM, other properties as well
        //const title_ = "Random Task"; //make sure each title is different
        //const description_ = "Make it happen!";
        //const dueDate_ = "1. 1. 2024";
        //const priority_ = "High";

        const task = todo(prompt("Give me a title"), "Make it happen",
            "1. 1. 2024", "High");


        // instead of home, get current project based on what user chose
        projects[currentProject].tasks[task.title] = task;

        console.log(projects);
        DOM.addTask(projects.home.tasks[task.title].description);



        //projects.home.push(todo("Random Task", "1. 1. 2020", "Normal"));
        //DOM.addTask(projects);
    });

    // temp
    return { projects }
})();

// DOM

const DOM = (() => {

    const project = document.querySelector('.shortcut');
    project.addEventListener('click', () => {
        project.classList.add("selected");
        DOM.changeProject(TODO.projects[1]);
    });

    const addTask = (description) => {
        const div = document.createElement("div");
        div.classList.add("task");
        div.textContent = description;

        const tasks = document.querySelector("#tasks");
        tasks.appendChild(div);
    };

    const changeProject = (project) => {
        eraseTasks();
        for (let em in project.tasks) {
            console.log(em);
            addTask(project.tasks[em].description);
        }
        return project;
    };

    const eraseTasks = () => {
        const tasks = document.querySelector("#tasks");
        while (tasks.firstChild) {
            tasks.removeChild(tasks.lastChild);
        }
    };

    return { addTask, changeProject }

})();