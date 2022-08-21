import { projects } from './todo';

function getDate() {
  const d = new Date();
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) { month = `0${month}`; }
  if (day.length < 2) { day = `0${day}`; }

  return [year, month, day].join('-');
}

function getMonthFromString(mon) {
  return new Date(Date.parse(`${mon} 1, 2012`)).getMonth() + 1;
}

const calender = document.querySelector('#date');

const today = getDate();
calender.setAttribute('value', today);
calender.setAttribute('min', today);

// set default date values to today
const dueDate = document.getElementById('dueDate');
dueDate.value = getDate();
// const proj_dueDate = document.getElementById("proj_dueDate");
// proj_dueDate.value = getDate();
// ideally you would format to fit location, but what a pain D:
function formatDate(date) {
  const temp = date.split('-');
  return [temp[1], temp[2], temp[0]].join('-');
}

function format(temp) {
  // temp (object):
  // Sun Aug 21 2022 02:00:00 GMT+0200 (Central European Summer Time)
  const str = temp.toString();
  const month = getMonthFromString(str.substring(4, 7));
  const day = str.substring(8, 10);
  const year = str.substring(11, 15);
  return [day, month, year];
}

const expireCheck = (task) => {
  // const todayArr = document.getElementById("date").value.split("-");

  const todayArr = format(document.getElementById('date').valueAsDate);
  // [day, month, year]
  const currentProject = document.querySelector('.selected').textContent;
  const arr = projects[currentProject].tasks[task.title].dueDate.split('-');
  if (+todayArr[0] > +arr[1] || +todayArr[1] > +arr[0] || +todayArr[2]
    > +arr[2]) {
    return true;
  }
  return false;
};

/* const proj_expireCheck = () => {
    const currentProject = document.querySelector(".selected").textContent;
    if (currentProject != "HOME") {
        const todayArr = format(document.getElementById("date").valueAsDate);
        const arr = projects[currentProject].dueDate.split("-");
        // year month day

        if (+todayArr[0] > +arr[2] || +todayArr[1] > +arr[0] || +todayArr[2] >
            +arr[0]) {
            return true;
        } else {
            return false;
        }
    }

} */

export { getDate, formatDate, expireCheck /* proj_expireCheck */ };
