function factorial(n) {
    if (n < 0 || isNaN(n)) return -1                         // Проверяет корректно ли число N и возвращает -1, если нет
    else if (n <= 1) return 1                                // Если число меньше единицы возвращает 1
    else return n * factorial(n - 1);
}

console.log(factorial(5));

function xn(x, n) {
    if (x == NaN || x % 1 != 0 || n < 0) return ("nan or n%1==0 or n<0");
    else if (n < 1) {
        return 1
    }
    else
    {
        return x * (xn(x,n-1));
    }
}

console.log(xn(5,4));

function translateToDouble(number)
{
    number = Number(number);
    if (number == NaN || number % 1 != 0 || number < 0) return ("number or number%1==0 or number<0");
    else if (number == 1 || number == 0) return number;
    else return String(translateToDouble(Math.floor(number / 2))) + String(number % 2)
}