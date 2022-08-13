import { eraseTasksD, addTaskD } from './dom.js';
import { setupTaskD } from './setupTask.js';
import { projects } from './todo.js';


// erase and add proper tasks
const changeProjectD = (project) => {
    console.log(projects);
    eraseTasksD();
    if (projects[project].tasks != {}) {
        for (let em in projects[project].tasks) {
            addTaskD(projects[project].tasks[em]);
            setupTaskD(projects[project].tasks[em], project);
        }
    }
};

export { changeProjectD };