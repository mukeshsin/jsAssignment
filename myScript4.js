let array = [1, 2, 3, 6, 6, 6, 7, 4, 4, 4, 7];
document.getElementById("demo4").innerHTML = ("Before filtering non-unique value:" + array);

let newarray = [];
array.forEach(function(number){
  if (array.lastIndexOf(array[number]) === array.indexOf(array[number])) {
    newarray.push(array[number]);
  }
})

document.getElementById("demo5").innerHTML = ("After filtering non unique values: " + newarray);




