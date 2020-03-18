import React from 'react';

import Contact from './Contact';

const ContactList = props => {
    let contacts = props.contacts.map(contact => {
        return (
            <Contact key={contact.name} name={contact.name} phone={contact.phone} />
        )
    });
    return (
        <div className="contact-list">
            {contacts}
        </div>
    )
}

export default ContactList;