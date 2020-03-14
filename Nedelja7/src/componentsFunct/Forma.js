import React from 'react'

const Forma = (props) => {
    return(
        
        <form className="form">
            <input type="text" placeholder="Tekst!"/>
            <input type="button" value={props.value}/>
        </form>
        
    )
}
export default Forma