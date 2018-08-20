import React, { Component } from 'react';
import './TransferFund.css';
import UserService from '../../services/UserService.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class TransferFund extends Component {
    state = {
        amount: 0
    }
    handleChangeValue = (event) => {
        let amount = event.target.value;
        this.setState({ amount: amount })
    }
    onTransfer = (event) => {
        event.preventDefault()
        console.log('pro',this.props.contact)
            UserService.addMove(this.props.contact,this.state.amount)
            .then(move => console.log(move))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="transfer flex">
                <h3 className="h3"></h3>
                <form className="flex">
                <input type="number"
                    value={this.state.amount}
                    onChange={this.handleChangeValue}
                    className="form-control"
                    placeholder="Enter amount to transfer" />
                <button type="submit" className="btn btn-danger" onClick={this.onTransfer}>
                    Transfaer
                </button>
                </form>
              
            </div>

        )
    }
}

export default TransferFund;