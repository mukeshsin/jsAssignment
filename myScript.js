const today = new Date();
const day = today.getDay();
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
document.getElementById("demo").innerHTML = ("Today is :" + dayList[day] + ",");

let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();
// using loop method//
let hourList = [];
for (var i = 0; i <= 23; i++) {
    hourList.push(i);
}
let minuteList = [];
for (var i = 0; i <= 59; i++) {
    minuteList.push(i);
}
let secondList = [];
for (var i = 0; i <= 59; i++) {
    secondList.push(i);
}
let prepand = (i >= 12) ? "PM" : "AM";
hour=(hour>=12)? hour-12:hour;
document.getElementById("demo1").innerHTML = ("Current time is:" + hourList[hour] + "" + prepand + ":" + minuteList[minute] + ":" + secondList[seconds] + "");