import React from 'react'
import Emoji from './Emoji'
import Description from './Description'

const Card = ({link, opis}) => {
    return(
        
        <>
        <div className="card">
            <Emoji link = {link} ></Emoji>
        </div>
            <Description opis={opis} ></Description>
        </>
        
    )
}
export default Card