const arr1=[1,2,5] //object1
const arr2=[...arr1];   // deep clone of object1 and copy them the same value//
arr2[0]=3;              //change a first index value
document.getElementById("clone").innerHTML=('Arr2',arr2);
