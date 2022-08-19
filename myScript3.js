const random_hex_color_code = () => {
    let n = (Math.random()* 10000000).toString();
    return '#' + n.slice(0, 6);
  };
document.getElementById("demo3").innerHTML=(random_hex_color_code());
  
