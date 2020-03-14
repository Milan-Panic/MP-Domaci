import React from 'react'
import Emoji from './Emoji'
import Description from './Description'

class Card extends React.Component{
    render(){
        return(
            <>
            <div className="card">
                <Emoji link="https://picsum.photos/200"></Emoji>
            </div>
                <Description opis="Ovo je opis neke slike!"></Description>
            </>
        );
    }
}
export default Card;