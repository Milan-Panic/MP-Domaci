import React from 'react';

const Contact = props => {
    return (
        <div className="contact">
            <p>Ime i Prezime: <span>{props.name}</span>   ...........   Broj telefona: <span>{props.phone}</span></p>
        </div>
    )
}

export default Contact;