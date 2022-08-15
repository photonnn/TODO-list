import { eraseTasksD, addTaskD, addProjectD } from './dom.js';
import { setupTaskD } from './setupTask.js';
import { projects } from './todo.js';
import { addProjectListener } from './eventListeners.js';


// erase and add proper tasks
const changeProjectD = (project) => {
    eraseTasksD();
    if (projects[project].tasks != {}) {
        for (let em in projects[project].tasks) {
            addTaskD(projects[project].tasks[em]);
            setupTaskD(projects[project].tasks[em], project);
        }
    }
};

// load all projects and tasks from storage
const loadFromStorage = () => {
    for (let project in projects) {
        if (project != "HOME") {
            addProjectD(projects[project], projects[project].id);
            addProjectListener(projects[project].id);
        }
    }

    for (let task in projects.HOME.tasks) {
      addTaskD(projects.HOME.tasks[task]);
      setupTaskD(projects.HOME.tasks[task], "HOME");
    }
};

export { changeProjectD, loadFromStorage };