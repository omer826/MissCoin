import React, { Component } from 'react';
import UserService from '../../services/UserService.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './SignUp.css';

class SignUp extends Component {
   
    signUp = (event) => {
        const key = event.keyCode || event.which;
        // on enter key - call onAdd
        if (key === 13) {
            UserService.signUp(event.target.value)
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <section >
                <div className="sign-up flex-column align-center">
                    <h3 className="h3">
                        <FontAwesomeIcon className="icon" icon="sign-in-alt" />
                        Sign Up</h3>

                    <form className="flex-column">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                id="name"
                                onKeyPress={event => this.signUp(event)}
                                placeholder="Enter your name" />
                        </div>
                    </form>

                </div>
            </section>
        )
    }

}

export default SignUp;