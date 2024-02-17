/*
Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
*/

let number = parseInt(prompt("Введіть деяке число:"));

if (isNaN(number) || number <= 1) {
    document.write("<p>Неправильний ввід. Будь ласка, введіть число.</p>");
} else {
    let exponent = 0;
    let result = 1;

    while (result < number) {
        exponent++;
        result *= 3;
    }

    document.write(result === number ? `Число ${number} можна отримати шляхом зведення числа 3 у ступінь ${exponent}` : `Число ${number} не можна отримати шляхом зведення числа 3 у деякий ступінь.`)

}