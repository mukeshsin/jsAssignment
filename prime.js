num = 17;
check = false;
for (i = 2; i <= num / 2; i++) {
    //non-prime//
    if (num % i == 0) {
        check = true;
        break;
    }
}
if (!check)
    document.write(num + " is a prime number.");
else
    document.write(num + " is not a prime number.");

