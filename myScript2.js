const randomHexaColorCode=()=>{
Math.floor(Math.random()*16777215).toString(16);
};

document.getElementById("demo2").innerHTML=randomHexaColorCode();