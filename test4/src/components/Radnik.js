import React, { Component } from 'react';

const Radnik = ({radnik}) => {
    return (
        <div className="radnik">
            <p>Ime radnika: {radnik.employee_name}</p>
            <p>Plata radnika: {radnik.employee_salary}</p>
            <p>Starosna dob radnika: {radnik.employee_age}</p>
            <hr/>
        </div>
    )
}

export default Radnik