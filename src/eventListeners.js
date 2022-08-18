import { projectFactory, projects, todo } from './todo.js';
import { addProjectD, addTaskD } from './dom.js';
import { changeProjectD, onClickingRPB } from './control.js';
import { setupTaskD } from './setupTask.js';
import { getDate, formatDate, expireCheck } from './date.js';

// it resets every time website refreshes so duplication bug occurs,
// and it's more efficient, (little bit lol)

const addTask = document.querySelector("#addTask");
addTask.addEventListener('click', () => {
    const form = document.querySelector("#taskForm");
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
    form.style.visibility = "visible";
});

// thought it would easy to put all form related code to the submit btn listener
const gbutton = document.querySelector(".green");
gbutton.addEventListener('click', () => {
    const task = getTask();
    if (!task) {
        alert("failure, you can't repeat a task title")
    } else {
        resetForm();

        // set default date, so MM-DD-YYYY is not shown on form
        const dueDate = document.getElementById("dueDate");
        dueDate.value = getDate();

        // setup task
        const currentProject = document.querySelector(".selected").textContent;
        projects[currentProject].tasks[task.title] = task;
        addTaskD(task, currentProject);
        setupTaskD(task, currentProject);


        // save to local when you add task or project
        localStorage.setItem('projects', JSON.stringify(projects));
    }
    console.log(projects);
});

function resetForm() {
    const form = document.querySelector("#taskForm");
    const cover = document.querySelector(".cover");
    form.reset();
    form.style.visibility = "hidden";
    cover.style.display = "none";
}

const rbutton = document.querySelector(".red");
rbutton.addEventListener('click', () => {
    resetForm();
});

// couldn't get submit type button to work, so needed a function to get values
// from the form, this is it
function getTask() {
    const title = document.getElementById("title").value;
    const currentProject = document.querySelector(".selected").textContent;
    if (!projects[currentProject].tasks[title]) {
        const description = document.getElementById("description").value;
        let dueDate = document.getElementById("dueDate").value;
        const priority = document.getElementById("priority").value;

        if (!dueDate) {
            dueDate = getDate();
        }

        let id = 0;
        // easiest way to prevent duplication bug => 2 tasks 1 id
        for (let em in projects[currentProject].tasks) {
            id = Math.max(id,
                Number(projects[currentProject].tasks[em].id
                    .replace("task", "")) + 1);
        }




        const task = todo(title, description, formatDate(dueDate), priority, "task" +
            id.toString());
        return task;
    } else {
        return 0;
    }
}

// similar problem as task id
//let projectID = Object.keys(projects).length;

// againt, needed a way to get values from the form
function getProject() {
    const title = document.getElementById("proj_title").value;
    if (!projects[title]) {
        const dueDate = document.getElementById("proj_dueDate").value;

        let projectID = 0;
        // easiest way to prevent duplication bug => 2 projects 1 id
        for (let em in projects) {
            projectID = Math.max(projectID, 
                Number(projects[em].id.replace("Pr", "")) + 1);
        }

        const proj = projectFactory(title, dueDate, "Pr" + projectID.toString());
        return proj;
    } else {
        return 0;
    }

}

const addProject = document.querySelector("#addProject");
addProject.addEventListener('click', () => {
    const projForm = document.querySelector("#projectForm")
    projForm.style.visibility = "visible";
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
});

const proj_gbutton = document.querySelector(".proj_green");
proj_gbutton.addEventListener('click', () => {
    const project = getProject();
    if (!project) {
        alert("Failure, can't repeat project name")
    } else {
        resetProjForm();
        projects[project.title] = project;
        projects[project.title].tasks = {};
        projects[project.title].id = project.id;

        addProjectD(project, project.id);
        addProjectListener(project.id);


        // save to local when you add task or project
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

const proj_rbutton = document.querySelector(".proj_red");
proj_rbutton.addEventListener('click', () => {
    resetProjForm();
});

function resetProjForm() {
    const form = document.querySelector("#projectForm");
    const cover = document.querySelector(".cover");
    document.getElementById("proj_title").value = "";
    document.getElementById("proj_dueDate").value = "";
    form.style.visibility = "hidden";
    cover.style.display = "none";
}

const conf_green = document.querySelector(".conf_green");
conf_green.addEventListener('click', () => {
    onClickingRPB();
    resetConfForm();
});

const conf_red = document.querySelector(".conf_red");
conf_red.addEventListener('click', () => {
    resetConfForm();
})

function resetConfForm() {
    const confForm = document.querySelector("#confirmationForm");
    confForm.style.visibility = "hidden";
    const cover = document.querySelector(".cover");
    cover.style.display = "none";
}




// add ID to each project and then 
const addProjectListener = (id) => {
    const project = document.getElementById(`${id}`);

    project.addEventListener('click', () => {
        const temp = document.querySelector('.selected');
        temp.classList.remove("selected");
        project.classList.add("selected");
        changeProjectD(project.textContent);
    });
}

addProjectListener("Pr0");

// navigate calender, left and right arrow
const left = document.querySelector('.calLeft');
const right = document.querySelector('.calRight');
const input = document.querySelector('#date');
left.addEventListener('click', () => {
    input.stepDown();
    check();
});
right.addEventListener('click', () => {
    input.stepUp();
    check();
});
// date is picked manually from the calander, click doesn't work
input.addEventListener('change', () => {
    check();
})

function check() {
    const currentProject = document.querySelector(".selected").textContent;
    for (let em in projects[currentProject].tasks) {
        const div = document.querySelector(`.${
            projects[currentProject].tasks[em].id
        }`);
        if (expireCheck(projects[currentProject].tasks[em])) {
            div.classList.add("expired");
        } else {
            div.classList.remove("expired");
        }
    }
}

export { addProjectListener }