let znakE = document.querySelector('#znak');
let opisE = document.querySelector('#opis');
let cenaE = document.querySelector('#cena');
let dugme = document.querySelector('#btn');

let prihod = 0;
let rashod = 0;
let budzet = 0;
let proc = 0;
let globProc = 0;

dugme.addEventListener('click', (e) => {
    e.preventDefault();
    if (opisE.value.trim()== '') {
        alert('Opis nije unet!');
        opisE.value = '';
        return;
    };
    if (cenaE.value.trim() == '' || cenaE.value <= 0) {
        alert('Iznos nije unet ili je dodat znak " - "!');
        cenaE.value = '';
        return;
    }
    let znak = znakE.value;
    let opis = opisE.value;
    let cena = parseInt(cenaE.value);
    //console.log(znak, cena, opis);
    if (znak == 'prihod') {
        //rashod = '';
        addTaskPrihod(opis, cena);
    } else {
        //prihod = '';
        addTaskRashod(opis, cena, budzet);
    }
    //console.log(proc);    
    // console.log(`Budzet: ${budzet}`);
    // console.log(`Prihod: ${prihod} Rashod: ${rashod} procenat ${rashod / budzet * 100}%`);



    opisE.value = '';
    cenaE.value = '';
})
let stanjePrikaz = document.querySelector('#omotac');
let rezultatiPrihoda = document.querySelector('#rezultatiPrihoda');
const addTaskPrihod = (opi, cen) => {
    prihod += cen;
    budzet += cen;
    globProc = rashod / budzet * 100;
    let listItem = document.createElement('div');
    listItem.id = "listItem";
    listItem.innerHTML = `<p>${opi}</p><p>+${Math.floor(cen)}</p>`;
    rezultatiPrihoda.appendChild(listItem);
    stanjePrikaz.innerHTML = renderHTML(budzet, prihod, rashod, Math.floor(globProc));
    let delBtn = document.createElement('p');
    delBtn.innerHTML = `&#9940;`;
    delBtn.addEventListener('click', () => {
        budzet -= cen;
        prihod -= cen;
        globProc = rashod / budzet * 100;
        stanjePrikaz.innerHTML = renderHTML(budzet, prihod, rashod, Math.floor(globProc));
        listItem.remove();
    });
    listItem.appendChild(delBtn);
    proc = 0;
    globProc = 0;

}

let rezultatiRashoda = document.querySelector('#rezultatiRashoda');

const addTaskRashod = (opi, cen, budz) => {
    rashod += cen;
    proc = cen / budz * 100;
    budz -= cen;
    globProc = rashod / budz * 100;

    let listItem = document.createElement('div');
    listItem.id = "listItem";
    listItem.innerHTML = `<p>${opi}</p><p>${cen}</p><span>${Math.floor(proc)}%</span>`;
    rezultatiRashoda.appendChild(listItem);
    stanjePrikaz.innerHTML = renderHTML(budz, prihod, rashod, Math.floor(globProc));
    let delBtn = document.createElement('p');
    delBtn.innerHTML = `&#9940;`;
    delBtn.addEventListener('click', (e) => {
        budz += cen;
        rashod -= cen;
        proc = cen / budz * 100;
        globProc = rashod / budz * 100;

        stanjePrikaz.innerHTML = renderHTML(budz, prihod, rashod, Math.floor(globProc));
        listItem.remove();
    });
    listItem.appendChild(delBtn);
    proc = 0;
    globProc = 0;


}


const renderHTML = (budz, prih, rash, pro) => {
    return `<h3>Dostupan budzet u Februaru 2020</h3>
    <div id="budzet">${budz}</div>
    <div id="stanje-prikaz">
        <div id="prihod-prikaz">
            <p>PRIHOD</p>
            <p id="prihod">+${prih}</p>
        </div>
        <div id="rashod-prikaz">
            <p>RASHOD</p>
            <p id="rashod">-${rash}  <span>${pro}%</span></p>
        </div>                
    </div>`;
}
