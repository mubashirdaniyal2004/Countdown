let days_html = document.getElementById("days");
let hours_html = document.getElementById("hours");
let mins_html = document.getElementById("mins");
let seconds_html = document.getElementById("seconds");
let now = new Date();
let baqraEid = new Date("6/17/2024");
let diff = baqraEid.getTime() - now.getTime();

var interval = setInterval(function () {
  let currentDate = new Date();
  if (diff > 0) {
    diff = diff - 1000;
    let days = diff / 1000 / 60 / 60 / 24;
    let hours = 24 - currentDate.getHours();
    let mins = 60 - currentDate.getMinutes();
    let seconds = 60 - currentDate.getSeconds();

    days_html.innerText = Math.floor(days);
    hours_html.innerText = Math.floor(hours);
    mins_html.innerText = Math.floor(mins);
    seconds_html.innerText = Math.floor(seconds);
  }
}, 1000);
