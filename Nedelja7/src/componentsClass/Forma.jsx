import React from 'react'
class Forma extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <p className="forma">
                <input type="text" placeholder="Unesi tekst"/>
                <input type="button" value={this.props.value}/>
            </p>
        )
    }
}
export default Forma