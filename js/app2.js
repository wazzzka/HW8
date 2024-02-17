//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const exchangeRate = 27;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    let costInUAH = dollars * exchangeRate;
    document.write(`Вартість ${dollars} доларів: ${costInUAH} гривень<br>`);
}