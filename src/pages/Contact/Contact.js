import React, { Component } from 'react';

import ContactList from '../../components/ContactList/ContactList';
import ContactFilter from '../../components/ContactFilter/ContactFilter';
import './Contact.css';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class Contact extends Component {
    contactStore = this.props.store.contactStore;

    componentDidMount() {
        console.log('this store', this.contactStore)
        this.contactStore.getContacts();
    }

    serachByFilter = (term) => {
        this.contactStore.getContacts(term);
    }

    render() {
        const { contacts } = this.contactStore;
        return (
            <section className="contact-page">
                <ContactFilter onFilter={this.serachByFilter} />
                <ContactList contacts={contacts} >
                </ContactList>
            </section>
        );
    }
}


