var array=[1,1,2,3,4,4,5,6,7,7,8,9];
document.getElementById("demo4").innerHTML=("Before filtering non-unique value:"+ array);

var unique = array.filter((value, index) => {
    return array.indexOf(value) === array.lastIndexOf(value);
  });

  document.getElementById("demo5").innerHTML=("After filtering non unique values: " + unique);