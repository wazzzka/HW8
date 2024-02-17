//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let number = parseInt(prompt("Введіть ціле число N:"));

if (isNaN(number) || number <= 0) {
    alert("Неправильний ввід. Будь ласка, введіть ціле додатнє число.");

} else {
    document.write(`<p>Цілі числа від 1 до 100, квадрат яких не перевищує числа ${number}:</p>`);

    for (let i = 1; i <= 100; i++) {
        let square = i * i;
        if (square <= number) {
            document.write(`${i}, `);
        }
    }
}