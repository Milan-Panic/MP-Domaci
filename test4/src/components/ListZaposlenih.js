import React, { useState } from 'react';
import Radnik from './Radnik';

const ListaZaposlenih = ({zaposleni}) => {
    //console.log(zaposleni);
    const [pocVr, setPoc] = useState(0)
    const [krVr, setKr] = useState(5)

    const handleClick = () =>{
        let sel = document.querySelector("#range").value
        // if(sel == 'p1'){
        //     setPoc(0)
        //     setKr(5)
        // }
        // else if(sel == 'p2'){
        //     setPoc(6)
        //     setKr(10)
        // }
        // else{
        //     setPoc(11)
        //     setKr(23)
        // }
    }
    const page1 = () => {
        let sel = document.querySelector("#range").value
        setPoc(0)
        setKr(sel)
    }
    const page2 = () => {
        let sel = document.querySelector("#range").value
        setPoc(sel+1)
        setKr(sel+sel)
    }
    return (
        <div className="lista-zaposlenih">
        <select id="range">
            {/* <option value={'p1'}>5</option>
            <option value={'p2'}>10</option>
            <option value={'p3'}>20</option> */}
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
        </select>
        <div><button onClick={()=>{page1()}} >Page1</button><button onClick={()=>{page2()}} >Page2</button><button onClick={()=>{page2()}} >Page3</button></div>
            {zaposleni.slice(pocVr, krVr).map((radnik)=><Radnik key={radnik.id} radnik={radnik}/>)}
        </div>
    )
}
export default ListaZaposlenih