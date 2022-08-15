import './style.css';
import './eventListeners';
import './date';
import { loadFromStorage } from './control';

loadFromStorage();
/*
    TODO:
    - Configure dates properly
        Two types of tasks:
            1. Something that needs to be done on a specific day. It can have a
                dueDate/dueHour, but it's optional. It only shows on one day
            2. Something that needs to be done till a specified dueDate. So it
                shows every day until the dueDate. Expired section might be 
                of use.

            Idea:
            Always show all that can be shown. If it happens that one of them
            expired simply nedote so using red border or (expired) tag.
            It can be shown if its start day is today or earlier.



    - Add a form for user input -/-
    - Style changes: Redo task squares
    - Task description/edit system
    - make priorites matter, border color
    - FIX remove button, namely when you don't input anything in the form
        multiple tasks are made event though there is only one saved in the 
        object. it shows correctly after refresh
    - FIX: prevent from changing projects when the form is opened,
        consider adding a cover just like in the library project
    - Add Local storage -/-
*/


