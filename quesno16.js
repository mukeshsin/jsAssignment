let is_weekend= function(date1){
    let dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } 
}
document.write(is_weekend('Nov 15, 2014')+"<br>");
document.write(is_weekend('Nov 16, 2014')+"<br>");
document.write(is_weekend('Nov 17, 2014')+"<br>");
document.write(is_weekend('Nov 18, 2014')+"<br>");
document.write(is_weekend('Nov 19, 2014')+"<br>");
document.write(is_weekend('Nov 20, 2014')+"<br>");
document.write(is_weekend('Nov 21, 2014')+"<br>");
document.write(is_weekend('Nov 22, 2014')+"<br>");
document.write(is_weekend('Nov 23, 2014')+"<br>");
document.write(is_weekend('Nov 24, 2014')+"<br>");

