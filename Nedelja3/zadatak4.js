/*
    function lifeSupply(numPerMonth,age){
    ...
    }
    
    lifeSupply(10,26) // Враћа 8880
    console.log(lifeSupply(10,26)) // Исписује 8880
*/
let numPerMonth = 10;
let age = 26;
function lifeSupply(numPerMonth, age) {
    let ukupno = ((100-age)*12)*numPerMonth
    return ukupno;
}
console.log(`Broj pizza potreban za dozivotno snabdevanje: ${lifeSupply(numPerMonth, age)}`);
