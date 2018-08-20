import React, { Component } from 'react';
import UserService from '../../services/UserService.js'
import BitcoinService from '../../services/BitcoinService.js'

import Statistic from '../Statistic/Statistic'
import MovesList from '../../components/MovesList/MovesList'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin } from '@fortawesome/fontawesome-free-brands';

import './Home.css';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer

class Home extends Component {
    userStore = this.props.store.userStore;

    state = {
        btcRate: 0,
    };
    componentDidMount() {
        this.userStore.getUser();
        BitcoinService.getBitCoinRate()
            .then(rate => {
                this.setState({ btcRate: rate });
            })
    }

    render() {
        const { user } = this.userStore;
        var title = user.name ? (
            user.moves.length > 0 ? 'Your 3 last move' : 'You dont have moves') : '';
        const movesToShow = user.name ? (user.moves.length > 3 ?
            user.moves.slice(0, 3) : user.moves) : [];


        return (
            <div className="home-page">
                <div className="txt-container">
                    <h1 className="h1">Hi, {user.name}</h1>
                    <hr />
                    <h3 className="h3"> <FontAwesomeIcon icon="coins" />  Coins: {user.coins}</h3>
                    <h3 className="h3"><FontAwesomeIcon icon={faBitcoin} />   BTC: {this.state.btcRate}</h3>

                </div>
                <MovesList title={title} inHome
                    moveList={movesToShow}></MovesList>
                <Statistic />
            </div>
        );


    }
}

export default Home;
