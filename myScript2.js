const randomHexaColorCode=()=>{
    let n=(math.random()*0xfffff*1000000).toString(16);
    return "#"+ n.slice(0,6);
};

document.getElementById("demo2").innerHTML=randomHexaColorCode();