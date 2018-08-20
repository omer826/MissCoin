import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../ContactDetailsPage/ContactDetails.css';

import './ContactEditPage.css';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class ContactEdit extends Component {
    contactStore = this.props.store.contactStore;

    state = {
        isSave: false,
        editContact: {}
    };
    componentDidMount() {
        var idContact = this.props.match.params.id;
        if (idContact) this.contactStore.getContactById(idContact);
        else this.contactStore.createEmptyContact();
    }

    handleChangeValue = (event) => {
        this.setState({ isSave: false });
        let { contact } = Object.assign({}, this.contactStore);
        //creating copy of object
        switch (event.target.id) {
            case ('name'):
                contact.name = event.target.value;                        //updating value
                this.setState({ editContact: contact });
                break;
            case ('phone'):
                contact.phone = event.target.value;                        //updating value
                this.setState({ editContact: contact });
                break;
            case ('email'):
                contact.email = event.target.value;                        //updating value
                this.setState({ editContact: contact });
                break;

        }
    }
    saveContact = (event) => {
        event.preventDefault();
        this.contactStore.saveContact(this.state.editContact)
        this.setState({ isSave: true })
    }
    deleteContant = (event) => {
        this.contactStore.deleteContact(this.contactStore.contact._id)
            .then(_ => this.props.history.push('/contact'))

    }
    render() {
        const { contact } = this.contactStore;
        return (
            <div className="edit-details flex-column">
                <div className="ctr-btn flex">
                    <div className="btn btn-danger self-start round-btn">
                        <Link to='/contact'>
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                    </div>
                    <div className="delete" onClick={this.deleteContant}>
                        <FontAwesomeIcon icon="trash-alt" />
                    </div>
                </div>

                <div className="img-profile-container flex">
                    <img src="/img/profile.png" alt="profile img" />
                </div>

                <form className="flex-column">
                    {this.state.isSave && <div className="success-icon self-end">
                        <FontAwesomeIcon icon="check-circle" />
                    </div>}
                    <div className="form-group">
                        <input type="text" className="form-control"
                            id="name"
                            value={contact.name}
                            onChange={this.handleChangeValue}
                            placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            id="phone"
                            onChange={this.handleChangeValue}
                            value={contact.phone}
                            placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control"
                            value={contact.email}
                            onChange={this.handleChangeValue}
                            id="email" aria-describedby="emailHelp"
                            placeholder="Enter email" />
                        <small id="emailHelp"
                            className="form-text text-muted">We'll never share
    your email with anyone else.</small>
                    </div>
                    <button type="submit" onClick={this.saveContact}
                        className=" btn btn-danger self-end">Save</button>
                </form>

            </div>
        );
    }
}

export default ContactEdit;
