import React from 'react'

class Emoji extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <img className="slika" src={this.props.link}></img>
            </>
        )
    }
}
export default Emoji;