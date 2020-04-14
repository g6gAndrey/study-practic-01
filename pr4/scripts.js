function today()
{
    let NameMonth, NameDate;
    data = new Date();
    year = data.getFullYear();
    month = data.getMonth();
    date = data.getDate();
    day = data.getDay();
    switch(month)
    {
        case 0: {NameMonth = "Январь"; break;}
        case 1: {NameMonth = "Февраль"; break;}
        case 2: {NameMonth = "Март"; break;}
        case 3: {NameMonth = "Апрель"; break;}
        case 4: {NameMonth = "Май"; break;}
        case 5: {NameMonth = "Июнь"; break;}
        case 6: {NameMonth = "Июль"; break;}
        case 7: {NameMonth = "Авуст"; break;}
        case 8: {NameMonth = "Сентябрь"; break;}
        case 9: {NameMonth = "Октябрь"; break;}
        case 10:{ NameMonth = "Ноябрь"; break;}
        case 11:{ NameMonth = "Декабрь"; break;}
    }
    switch(day)
    {
        case 0:{ NameDate = "Воскресенье"; break;}
        case 1:{ NameDate = "Понедельник"; break;}
        case 2:{ NameDate = "Вторник"; break;}
        case 3:{ NameDate = "Среда"; break;}
        case 4:{ NameDate = "Четверг"; break;}
        case 5:{ NameDate = "Пятница"; break;}
        case 6:{ NameDate = "Суббота"; break;}
    }
    alert(date + " " + NameMonth + " " + year + " " + NameDate);
}

function factorial(n) {
    // console.log("i=",i++);
    // console.log(i + "! = " + factorial(i));
    // debugger;
    // if (n < 0 || isNaN(n)) return -1                         // Проверяет корректно ли число N и возвращает -1, если нет
    // else if (n <= 1) return 1                                // Если число меньше единицы возвращает 1
    // else return n * factorial(n-1);                          // Иначе вернуть число N умноженное на факториал N - 1
    let result = 1                                              // Создание переменной для хранения ответа
    console.assert(n < 0, "Некорректное значение!")             // Вывод ошибки при некорректном значении параметра
    if (n < 0 || isNaN(n)) {                                    // Проверка на корректность параметра
        console.warn("Введено некорректное значение параметра");// Если значение параметра не корректно, вывод ошибки
        return -1                                               // и возвращение -1
    }                           
    for (let i = 1; i <= n; i++) {                              // Запуск цикла с счетчиком i от 1 до n включительно с шагом 1
        result *= i;                                            // Расчет факториала числа i 
        console.log(i+'! = '+result);                           // Ввыод факториала числа i в консоль разработчика
        console.info('%i! = %i', i, result);                    // Ввыод факториала числа i в консоль разработчика
    }
    return result;                      // Возвращение результата вычислений функции
}

document.write(factorial(5));

function timer(sec)
{
    let min = 0;
    while (sec >= 60)
    {
        min++;
        sec -= 60;
    }
    sec = String(sec).length == 1 ? '0' + sec : sec;
    alert(min + ":" + sec);
}

timer(120);