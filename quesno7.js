let num = 32243
let rev=0;
let lastDigit;
// number is not equal zero//
while(num!=0){
    lastDigit=num%10;
    rev=rev*10+lastDigit;
    num=Math.floor(num/10);
}
document.write(rev);