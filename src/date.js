import { projects } from "./todo";

const calender = document.querySelector("#date");

const today = getDate();
const dueDate = document.getElementById("dueDate");
dueDate.value = getDate();
calender.setAttribute("value", today);
calender.setAttribute("min", today);


function getDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

// ideally you would format to fit location, but what a pain D:
function formatDate(date) {
    date = date.split("-");
    return [date[1], date[2], date[0]].join("-");
}

function format(str) {
    str = str.toString();
    const month = getMonthFromString(str.substring(4, 7));
    const day = str.substring(8, 10);
    const year = str.substring(11, 15);
    return [day, month, year];
}

function getMonthFromString(mon) {
    return new Date(Date.parse(mon + " 1, 2012")).getMonth() + 1;
}

const expireCheck = (task) => {
    //const todayArr = document.getElementById("date").value.split("-");

    const todayArr = format(document.getElementById("date").valueAsDate);
    // [day, month, year]
    // console.log(document.getElementById("date").valueAsDate);
    // ex: Wed Sep 28 2022 02:00:00 GMT+0200 (Central European Summer Time)
    const currentProject = document.querySelector(".selected").textContent;
    console.log(projects[currentProject].tasks);
    const arr = projects[currentProject].tasks[task.title].dueDate.split("-");
    if (+todayArr[0] > +arr[1] || +todayArr[1] > +arr[0] || +todayArr[2] >
            +arr[2]) {
        return true;
    } else {
        return false;
    }
}

export { getDate, formatDate, expireCheck };