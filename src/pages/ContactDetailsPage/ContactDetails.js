import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

import MovesList from '../../components/MovesList/MovesList'
import TransferFound from '../../components/TransferFund/TransferFund'
import './ContactDetails.css';
import '../../components/ContactList/ContactList.css';



@inject('store')
@observer
class ContactDetails extends Component {
    contactStore = this.props.store.contactStore;
    userStore = this.props.store.userStore;


    componentDidMount() {
        console.log('detacontactStore', this.contactStore);
        var id = this.props.match.params.id;
        this.contactStore.getContactById(id);
        this.userStore.getMoveById(id)

    
    }
    render() {
        const  {contact}  = this.contactStore
        const {movesPerContact} = this.userStore;
        console.log('movesPerContact', movesPerContact);


        return (
           
            <section className="contact-details-page flex-column">
                <div className="ctr-btn flex">
                    <div className="ctrl-btn btn btn-danger self-start round-btn">
                        <Link to='/contact'>
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                    </div>
                    <div className="edit-container" >
                        <Link to={`/contact/edit/${contact._id}`}>
                            <FontAwesomeIcon icon="edit" />
                        </Link>
                    </div>
                </div>

                <div className="img-profile-container flex">
                    <img src="/img/profile.png" alt="profile img" />
                </div>
                <div className="contact-details">
                    <h2 className="h2">{contact.name}</h2>
                    <h4 className="h4">{contact.phone}</h4>
                    <h5 className="h5">{contact.email}</h5>

                </div>
                <div className="transfer-cmp">
                    <TransferFound contact={contact}></TransferFound>
                </div>
                <MovesList title='Your moves' 
                    moveList={movesPerContact}></MovesList>

            </section>
        );
    }
}

export default ContactDetails;
