import React, { Component } from 'react';
import { getEmployee, postEmployee } from '../services/services';
import ListaZaposlenih from './ListZaposlenih';
import Forma from './Forma';

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zaposleni: [],
        }
        this.setZaposleni();
    }

    setZaposleni = async () => {
        let data = await getEmployee();
        this.setState({
            zaposleni: data
        })
    }

    podaciRadnik = async (e) => {
        e.preventDefault();
        let radnik = document.querySelector('#ime').value;
        let plata = document.querySelector('#plata').value;

        await postEmployee(radnik, plata);
        this.setZaposleni();

    }

    render(){
        return (
            <div className="wrapper">
                <Forma handler={this.podaciRadnik}/>
                <ListaZaposlenih zaposleni = {this.state.zaposleni}/>
            </div>
        )
    }

}
export default Wrapper