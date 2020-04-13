/* 
Считает факториал, делая проверку на кореектные исходные данные.
Кондратов Андрей Дмитриевич
13.04.2020
*/

function factorial(n) {
    if (n < 0 || isNaN(n)) return -1 // Проверяет корректно ли число N и возвращает -1, если нет
    else if (n <= 1) return 1        // Если число меньше единицы возвращает 1
    else return n * factorial(n-1);  // Иначе вернуть число N умноженное на факториал N - 1
}

var x = factorial(5);                // Создали переменную x, записали выполнения функции factorial
alert(x);                            // Вывели всплывающее окно со значением переменной x
document.write(x);                   // Вывели значение переменной x в html документ