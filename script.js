// date
let day = document.querySelector(".day");
let date = document.querySelector(".date");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

//time
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let getDate = function () {
  const curDate = new Date();
  const dateObj = {
    date: curDate.getDate().toString().padStart(2, "0"),
    month: months[curDate.getMonth()],
    year: curDate.getFullYear(),
    day: days[curDate.getDay()],
    hour: curDate.getHours().toString().padStart(2, "0"),
    minute: curDate.getMinutes().toString().padStart(2, "0"),
    second: curDate.getSeconds().toString().padStart(2, "0"),
  };

  return dateObj;
};

let setDate = function () {
  const dateObj = getDate();
  day.textContent = dateObj.day;
  date.textContent = dateObj.date;
  month.textContent = dateObj.month;
  year.textContent = dateObj.year;
  hour.textContent = dateObj.hour;
  minute.textContent = dateObj.minute;
  second.textContent = dateObj.second;
};
setDate();
setInterval(setDate, 1000);
