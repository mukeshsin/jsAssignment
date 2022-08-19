let array = [1, 2, 3, 6, 6, 6, 7, 4, 4, 3, 4, 7];
document.getElementById("demo4").innerHTML = ("Before filtering non-unique value:" + array);

let unique = array.forEach(function(value){
    if( array.indexOf(value) === array.lastIndexOf(value));
    unique.push(array[unique]);
  });


document.write("After filtering non unique values: " + unique);


