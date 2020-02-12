/*
    Написати функцију која израчунава цену пице по квадратном центиметру 
    (параметри функције су полупречник у цм, и цена пице)
*/

let cena = 230;
let poluPrecnik = 25;
const Pi = 3.14;

function cenaPizze(c, r) {

    let P = Math.pow(r, 2) * Pi;
    let cena_po_cm = Math.round((P / c) * 100) / 100;
    return `Cena: ${cena_po_cm} dinara po centimetru kvadratnom!`;
    //console.log(`Cena: ${cena_po_cm} dinara po cm kvadratnom!`);

}
console.log(cenaPizze(cena, poluPrecnik));
