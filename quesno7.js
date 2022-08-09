var num = 32243
var reverse=0;
while(num!=0){
    reverse=(reverse*10)+(num%10);
    num=parseInt(num/10);
}
console.log(num);
//document.getElementById("demo7").innerHTML=(num);