/*
    function divisibleByFive(arr){
    ...
    }

    divisibleByFive([1,2,3,4,5,10,15,23,1,5]) // Исписује -> 5,10,15,5
*/
let niz = [1,2,3,4,5,10,15,23,46,50];
let novNiz = [];
function deljivoSaPet(arr) {
    for (let i = 0; i <= arr.length; i++) {
        //console.log(niz[i]);
        if (niz[i]%5 == 0 && niz[i] != 0) {
            console.log(niz[i]);
            novNiz.push(niz[i]);                        
        }
    }
}
deljivoSaPet(niz);
console.log(`Brojevi iz niza koji su deljivi sa 5 su: ${novNiz}`);
