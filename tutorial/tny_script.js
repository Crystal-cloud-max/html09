"use strict";

/*Execute the function to run and display the countdown clock*/
setInterval("runClock()", 1000);

/*Function to create and run the countdown clock*/
function runClock() {
/*Store the current date and time*/
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/*Display the current date and time*/
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/*Calculate the days until January 1st*/
var newYear = new Date("January 1, 2030");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);

/*Display the time left until New Year's Eve*/
var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);
}
