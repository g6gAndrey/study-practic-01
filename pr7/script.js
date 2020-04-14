//1
function reverseString(string) {
    for(let i = string.length-1; i >= 0; i--){
        console.log(string[i]+" "+string.charCodeAt(i));
    }
}

//2
function countSubstrings(string, substring) {
    let count = 0;
    let lastIndex = -1;
    do {
        lastIndex = string.indexOf(substring, lastIndex+1);
        count = lastIndex != -1 ? count+1 : count;
    } while (lastIndex != -1);
    console.log(count);
}

//3
function round(num, n) {
    return String(num.toFixed(n));
}

//4
function createPassword(n) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for ( var i = 0; i < n; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

//5
function calc(num1, num2, op) {
    switch (op) {
        case '+': return num1 + " + " + num2 + " = " + (num1 + num2).toFixed(3);
        case '-': return num1 + " - " + num2 + " = " + (num1 - num2).toFixed(3);
        case '*': return num1 + " * " + num2 + " = " + (num1 * num2).toFixed(3);
        case '/': return num1 + " / " + num2 + " = " + (num1 / num2).toFixed(3);
        default: return "Операция " + op + " неизвестна!!! Ошибка!!!"
    }
}