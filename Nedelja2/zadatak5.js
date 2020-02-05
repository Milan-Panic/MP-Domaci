let cena = 230;
let precnik = 50;
// P= r^2 Pi
const Pi = 3.14;
let P = Math.pow((precnik / 2), 2) * Pi;
let cena_po_cm = Math.round((P / cena) * 100) / 100;
console.log(`Cena: ${cena_po_cm}`);
