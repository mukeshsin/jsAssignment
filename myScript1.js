let object1={
    name:"mukesh",
    surname:"singh",
    age:"30",
    color:"white",
 
}
let object2={
    name:"mukesh",
    surname:"singh",
    age:"30",
    color:"white"
}
function check(object1,object2){
    for(key in object2){
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true
}
document.getElementById("demo2").innerHTML=[check("object1:key,object2:key")]
