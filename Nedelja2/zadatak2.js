let pizza = 320;
let budzet = 150;
if (budzet < pizza) {
    console.log('Nemate dovoljno novca za kupovinu!');
    console.log(`Trenutno stanje je nepromenjeno. Ono iznosi: ${budzet}din`);      
}else{
    console.log('Uspesno ste kupili proizvod!');
    console.log(`Trenutno stanje, sada izmenjeno je: ${budzet - pizza}din`);  
}