let num = 32243
let rev=0;
let lastDigit;
//while loop condition use//
while(num!=0){
     rev=(rev*10)+ (num%10);
    num=parseInt(num/10);
}
document.write(rev);