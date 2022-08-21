function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
            // Firefox
            || e.code === 1014
            // test name field too, because code might not be present
            // everything except Firefox
            || e.name === 'QuotaExceededError'
            // Firefox
            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
            // acknowledge QuotaExceededError only if there's something already stored
            && (storage && storage.length !== 0);
  }
}

export const projects = {
  HOME: {
    tasks: {
    },
    id: 'Pr0',
  },
};

if (storageAvailable) {
  let retrievedObject = localStorage.getItem('projects');
  if (retrievedObject === null) {
    retrievedObject = JSON.stringify({});
  }
  retrievedObject = JSON.parse(retrievedObject);
  // for (const em of Object.keys(retrievedObject)) {
  //   projects[em] = retrievedObject[em];
  // }
  Object.keys(retrievedObject).forEach((em) => {
    projects[em] = retrievedObject[em];
  });
  // projects = localStorage.getItem('projects');
}

export const todo = (title, description, dueDate, priority, id) => ({
  title, description, dueDate, priority, id,
});

export const projectFactory = (title/* , dueDate */, id) => ({
  title/* , dueeDate */, id,
});
