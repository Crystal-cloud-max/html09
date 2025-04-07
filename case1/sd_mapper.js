"use strict";

//Store current date and time
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

//display today's date and time
document.getElementById("timeStamp").innerHTML = timeStr;

//Determine which sky map to show in the web page
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

//Calculate map number to use with given hour and month
var mapNum = ((2 * thisMonth) + thisHour) % 24;

//use Javascript to write HTML code for inline element showing sky image for the web
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

//insert the value of the imgStr variable after the element's opening tag
document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);
