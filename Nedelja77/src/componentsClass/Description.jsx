import React from 'react'
class Description extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            
              <p className="opis">
              {this.props.opis}
              </p>
            
        )
    }
}
export default Description