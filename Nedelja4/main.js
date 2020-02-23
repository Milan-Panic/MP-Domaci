/*
1. Направити објекат покемон који садржи следеће информације: 
    (Направите макар 4 различита покемона)*/
let pok1 = {
    ime: 'Pikacu',
    vrsta: 'elektricni',
    slika: 'images/pikacu.jpg',
    sposobnosti: ['static electric', 'lighting rod'],
    karakteristike: {
        napad: 45,
        odbrana: 78,
        brzina: 90
    }
}
let pok2 = {
    ime: 'Vulpix',
    vrsta: 'vatreni',
    slika: 'images/vulpix.jpg',
    sposobnosti: ['flash fire', 'drought'],
    karakteristike: {
        napad: 65,
        odbrana: 42,
        brzina: 98
    }
}
let pok3 = {
    ime: 'Nidoking',
    vrsta: 'otrovni',
    slika: 'images/nidoking.jpg',
    sposobnosti: ['poison point', 'rivalry', 'sheer force'],
    karakteristike: {
        napad: 92,
        odbrana: 83,
        brzina: 34
    }
}
let pok4 = {
    ime: 'Golem',
    vrsta: 'zemljani',
    slika: 'images/golem.jpg',
    sposobnosti: ['rock head', 'sturdy', 'sabd veil'],
    karakteristike: {
        napad: 86,
        odbrana: 57,
        brzina: 41
    }
}
let pok5 = {
    ime: 'Rapidash',
    vrsta: 'vatreni',
    slika: 'images/rapidash.jpg',
    sposobnosti: ['run away', 'flash fire', 'flame body'],
    karakteristike: {
        napad: 78,
        odbrana: 56,
        brzina: 99
    }
}
let sviPokemoni = [pok1, pok2, pok3, pok4, pok5];

//console.log(pok1);

/*
2. Направити функцију која прима низ горе направљених објеката
   и враћа један низ способности свих покемона*/

let nizSvihSposobnosti = [];

function sveSposobnosti(niz) {
    niz.forEach(pok => {
        //console.log(pok.sposobnosti);
        nizSvihSposobnosti.push(...pok.sposobnosti);
        return nizSvihSposobnosti;
    });
    console.log(nizSvihSposobnosti);
}
//sveSposobnosti(sviPokemoni);

/*
3. Сортирати покемоне по брзини, растуће*/
//console.log(sviPokemoni);



function speedSort(nizP) {
        nizP.sort((a, b) => a.karakteristike.brzina - b.karakteristike.brzina);
    return nizP;
}

//console.log(speedSort(sviPokemoni));

/*
4. Направити функцију која прима низ покемона, пореди покемоне по јачини и 
    враћа као победника оног који има највећу јачину напада.*/

    /*function strongestSort(nizP) {
           nizP.sort((b, a) => a.karakteristike.napad - b.karakteristike.napad);
           
        return nizP[0];  
    }
    //console.log(strongestSort(sviPokemoni));
    */
    function strongestSort(nizP) {
        let napad = 0;
        let najjaciPokemon;
        nizP.forEach((pok)=>{
            if (pok.karakteristike.napad > napad) {
                napad = pok.karakteristike.napad;
                najjaciPokemon = pok;
            }
        })
        return najjaciPokemon;
    }
    

/*
5. За дати html направити скрипту која:
	```
	    <div class="wrapper">
			<button id="prikaz">PRIKAZI POKEMONE</button>
			<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
		</div>
	```
	
	*На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :

    ```
	    <div>
            <p>Opis pokemona</p>
            <img src="slika odgovarajućeg pokemona">
        </div>
    ```
	
    *На клик на дугме прикажи најјачег покемона приказује покемона који има 
        најјачи напад (користити већ написану функцију иѕ 4. задатка) 
        по истом формату.   */
     
let btnPrikaz = document.querySelector('#prikaz');
let btnNajjaci = document.querySelector('#pobednik');
let app = document.querySelector('#app');
let omotac = document.querySelector('#omotac');
let najj = document.querySelector('#najjaci');
let body = document.querySelector('body');


btnPrikaz.addEventListener('click', ()=>{
    renderHTML(sviPokemoni);
})

btnNajjaci.addEventListener('click', ()=>{
    renderNajjaciHTML(sviPokemoni);
    najj.style.display = "block";
})

const renderHTML = function () {
    app.innerHTML = '';
    sviPokemoni.forEach((poke)=>{
        let prvi = content(poke);
        app.innerHTML += prvi;        
    })
}
const renderNajjaciHTML = function () {
    najj.innerHTML = '';    
    let najjaci = strongestSort(sviPokemoni);    
        let drg = content(najjaci);
        najj.innerHTML = drg;
}




const content = function (niz) {
      return `<div id="omotac">
            <h3>${niz.ime}</h3>
            <p> <b>Vrsta:</b> ${niz.vrsta}<br>
               <b>Sposobnosti: </b><br>
                ${niz.sposobnosti}</b><br>
                <b>Karakteristike:</b><br>
                Napad:${niz.karakteristike.napad}<br>               
                Brzina:${niz.karakteristike.brzina}<br>               
                Odbrana:${niz.karakteristike.odbrana}<br>               
            </p> <br>
            <img src="${niz.slika}">
            </div>`
    
}

