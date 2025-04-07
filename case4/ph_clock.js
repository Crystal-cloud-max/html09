"use strict";

//create variables for timer
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = (minsLeft * 60) + secsLeft;//in seconds 1800+0

//let countdown run every second
var clockID = setInterval("countDown()", 1000);
/* ------------------------------------------------- */

//function to update minsLeft, secsLeft, and timeLeft variables every second
function countDown() {
    minsLeft = Math.floor(timeLeft / 60);// 1800 / 60 = 30
    secsLeft = timeLeft - (minsLeft * 60);// 1800 - (30*60) = 0

    //displaying leading 0s when minsLeft or secsLeft are between 0-9
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    document.getElementById("minutes").textContent = minsString;
    document.getElementById("seconds").textContent = secsString;

    //checking whether there is any time left to submit the order
    checkTimer();//call function
    timeLeft--;//decrement
}

/*function to notify the user that the time has expired replacing Time Remaining*/
function stopClock() {//insert before the closing h1 element
    document.getElementById("TimeHead").insertAdjacentHTML('beforeEnd', "<br />(Order Expired)");
    clearInterval(clockID);//stop countdown timer for submission
}

//if seconds equals 0 call stopClock function for times up for submission
function checkTimer() {
   if (timeLeft === 0) stopClock();
}

//will add 0 before single digit to the timer else none before single digit
function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
