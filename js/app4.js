//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let number = parseInt(prompt("Введіть ціле число:"));
let count = 0;

if (isNaN(number) || number <= 1) {
    alert("Неправильний ввід. Будь ласка, введіть число.");

} else {

    document.write(`Число ${number} `);

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    document.write((count < 2) ? "є простим числом." : "не є простим числом.")
}