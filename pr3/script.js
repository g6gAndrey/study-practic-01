function y(x) {
    const a = 100;
    if (isNaN(x)) {
        alert("Error");
    }
    else if (x < -10) {
        alert((a * (x * x)).toFixed(3));
    }
    else if (x >= -10 && x < 0) {
        alert((x * x * x * x).toFixed(3));
    }
    else if (x >= 0 && x < 10) {
        alert((a * (Math.abs(x))).toFixed(3));
    }
    else if (x >= 10) {
        alert((1 / (a - x)).toFixed(3));
    }
}

function countDays(month, year) {
    //if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) 
    if (isNaN(month) || isNaN(year)) return ("Не число!") 
    else
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 2:
                return year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28;
            default:
                return 30;
        }
}

console.log(countDays('5', 'true'));

function randomNumber () {
    const num = Math.floor(Math.random()*100);
    let isSimple = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) isSimple = false;
    }
    alert("Число "+num);
    alert("Является простым "+isSimple);
}

randomNumber();