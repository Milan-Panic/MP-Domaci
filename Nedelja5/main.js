let znakE = document.querySelector('#znak');
let opisE = document.querySelector('#opis');
let cenaE = document.querySelector('#cena');
let dugme = document.querySelector('#btn');

let prihod = 0;
let rashod = 0;
let budzet = 0;

dugme.addEventListener('click', (e)=>{
    e.preventDefault();
    let znak = znakE.value;
    let opis = opisE.value;
    let cena = parseInt(cenaE.value);

    //console.log(znak, cena, opis);
    if (znak == 'prihod') {
        prihod += cena;
        budzet += cena;
        //rashod = '';
        addTaskPrihod(opis, cena);   //funkcija za ubacivanje taska u prihode
    }else{
        rashod += cena;
        budzet -= cena;
        //prihod = '';
        addTaskRashod(opis, cena,budzet);
    }
    // console.log(`Budzet: ${budzet}`);
    // console.log(`Prihod: ${prihod} Rashod: ${rashod} procenat ${rashod / budzet * 100}%`);
    let stanjePrikaz = document.querySelector('#omotac');
    stanjePrikaz.innerHTML = renderHTML(budzet, prihod, rashod);
    
    
    opisE.value = '';
    cenaE.value = '';
})

let  rezultatiPrihoda = document.querySelector('#rezultatiPrihoda'); 
const addTaskPrihod = (opi, cen)=>{
    let listItem = document.createElement('div');
    listItem.id = "listItem";
    listItem.innerHTML = `<p>${opi}</p><p>+${cen}</p>`;
    rezultatiPrihoda.appendChild(listItem);
}
let  rezultatiRashoda = document.querySelector('#rezultatiRashoda'); 

const addTaskRashod = (opi, cen, budz)=>{
    let listItem = document.createElement('div');
    listItem.id = "listItem";
    listItem.innerHTML = `<p>${opi}</p><p>${cen}</p><span>${Math.round(cen / budz * 100)/100}%</span>`;
    rezultatiRashoda.appendChild(listItem);
}


const renderHTML = (budz, prih, rash)=>{
    return `<h3>Dostupan budzet u Februaru 2020</h3>
    <div id="budzet">${budz}</div>
    <div id="stanje-prikaz">
        <div id="prihod-prikaz">
            <p>PRIHOD</p>
            <p id="prihod">+${prih}</p>
        </div>
        <div id="rashod-prikaz">
            <p>RASHOD</p>
            <p id="rashod">-${rash}  <span>${Math.round(rash / budz * 100)/100}%</span></p>
        </div>                
    </div>`;
}