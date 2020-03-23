import React, { Component } from 'react';

const Forma = (props) => {
    return (
        <div className="forma">
            <input type="text" id="ime" />
            <input type="number" id="plata" />
            <button onClick={props.handler}>Dodaj</button>
        </div>
    )
}
export default Forma;
