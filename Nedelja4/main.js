/*
1. Направити објекат покемон који садржи следеће информације: 
    (Направите макар 4 различита покемона)*/
let pok1 = {
    ime: 'Pikacu',
    vrsta: 'elektricni',
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

let brzine = [];


function speedSort(nizP) {
    nizP.forEach(pokemon => {
        //console.log(pokemon.karakteristike.brzina);//hvata brzinu
        brzine.push(pokemon);
        brzine.sort((a, b) => a.karakteristike.brzina - b.karakteristike.brzina);
    });
    return brzine;
}

console.log(speedSort(sviPokemoni));