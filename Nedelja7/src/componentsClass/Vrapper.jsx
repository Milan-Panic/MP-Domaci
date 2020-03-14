import React from 'react'
import Forma from './Forma';
import Card from './Card';

class Vrapper extends React.Component{
    render(){
        return(
            <div className="vrapper">
                <>
                <Card></Card>
                <Forma value="Klik"></Forma>
                </>
            </div>
        );
    }
}
export default Vrapper;