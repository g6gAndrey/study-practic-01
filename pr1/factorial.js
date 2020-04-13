function factorial(n) {
    if (n < 0 || isNaN(n)) return -1
    else if (n <= 1) return 1
    else return n * factorial(n-1);
}

var x = factorial(5);
alert(x);
document.write(x);