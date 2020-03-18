import React from 'react';
import './App.css';
import ContactList from './ContactList';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: [
                {
                    name: 'Marko Markovic',
                    phone: '+16546566'
                },
                {
                    name: 'Djura Djuric',
                    phone: '+79983356'
                },
                {
                    name: 'Marija Majovic',
                    phone: '+49365656'
                }
            ],
            filter: '',
            match: false
        }
    }

    filterContacts = e => {
        this.setState({filter: e.target.value});
    }

    addContactHandler = e => {
        e.preventDefault();
        const number = (document.querySelector('#number').value).trim();
        const name = (document.querySelector('#name').value).trim();

        if(number == '' || name == ''){
            document.querySelector('#msg').innerHTML = 'Every field is required!';
            return;
        }

        if(number[0] != '+'){
            document.querySelector('#msg').innerHTML = 'Number must start with + sign!';
            return;
        }
        document.querySelector('#msg').innerHTML = '';
        
        let match = false;
        this.state.contacts.forEach(contact => {
            if(contact.name == name){
                match = true;
                this.setState({match:true});
            }

        });

        if(!match){
            let contacts = this.state.contacts;
            contacts.push({name:name, phone:number});
            this.setState({
                contacts:contacts,
                match:false
            });
        }
    }
    potvrdaDa = e =>{
        e.preventDefault();
            const number = (document.querySelector('#number').value).trim();
            const name = (document.querySelector('#name').value).trim();
            const forma = document.querySelector('.forma');


            let contacts = this.state.contacts;
            for(let i = 0; i < contacts.length; i++){
                    if(contacts[i].name == name){
                        contacts[i] = {
                            name: name,
                            phone: number
                        }
                        break;
                    }
                }
                this.setState({
                    contacts: contacts,
                    match:false
                })
                forma.reset();
            }

    potvrdaNe = e =>{
        e.preventDefault();
        const forma = document.querySelector('.forma');
        this.setState({match:false});
                forma.reset();
        }

    render(){
        let contacts = [];
        this.state.contacts.forEach(contact => {
            if(contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())){
                contacts.push(contact);}
        });

        return(
            <div className="app">
                <h1>Imenik</h1>
                <form className="forma">
                    <input type="text" id="name" placeholder="Ime i Prezime" />
                    <input type="text" id="number" placeholder="+xxxxxxxx" />
                    <button onClick={this.addContactHandler}>Dodaj</button>
                    <p id="msg"></p>
                    {
                        this.state.match 
                        &&
                        <div>
                            <p>Kontakt vec postoji. Da li hocete da zamenite stari broj novim?</p>
                            <button onClick={this.potvrdaDa}>Da</button>
                            <button onClick={this.potvrdaNe}>Ne</button>
                        </div>
                    }
                </form>
                <input type="text" placeholder="Pretraga" onChange={this.filterContacts} />
                <ContactList contacts={contacts} /> 
            </div>
        )
    }
}

export default App;