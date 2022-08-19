let obj1 = {
    name: "John",
    age: 23,
    degree: "CS"
}

let obj2 = {
    name:"rohan",
    age: 23,
    degree: "CS"
}
function check(obj1, obj2){
    for (let key in obj2) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
document.write(check(obj1,obj2));


