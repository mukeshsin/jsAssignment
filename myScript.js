const today= new Date();
const day= today.getDay(); 
const dayList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
document.getElementById("demo").innerHTML=("Today is :"+ dayList[day]+",");

let hours= today.getHours();
for(i=0; i<=23; i++);
let minute= today.getMinutes();
for(i=0; i<=59; i++);
let seconds= today.getSeconds();
for(i=0; i<=59; i++);
let prepand=(i>=12)? "PM": "AM";
hour=(i>=12)? hour-12:hour;
document.getElementById("demo1").innerHTML=("Current time is:"+hourList[hour]+""+prepand+":"+minuteList[minute]+":"+secondList[seconds]+"");