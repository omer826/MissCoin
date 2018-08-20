import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ContactDetails from './pages/ContactDetailsPage/ContactDetails';
import ContactEditPage from './pages/ContactEditPage/ContactEditPage';
import SignUp from './pages/SignUp/SignUp';

import { observable, computed } from 'mobx';
import { observer, inject } from 'mobx-react';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faStroopwafel, faCoins, faUsers, faHome, faChartBar, faArrowLeft,
  faEdit, faCheckCircle, faTrash, faTrashAlt, faPlus, faSignInAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faCoins, faUsers, faHome, faChartBar, faArrowLeft, faEdit,
  faCheckCircle, faTrashAlt, faPlus, faSignInAlt);




@inject('store')
@observer
class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <header className="App-header flex align-center">
              {/* <img src="/img/logo/logo.png" className="App-logo" alt="logo" /> */}
              <h5 className="h5 text-light">Miss.BitCoin</h5>
              <NavBar></NavBar>

            </header>
            <main className="main-app-container">
              <Switch>
                <PrivateRoute
                  exact
                  path="/"
                  component={Home}
                />
                <PrivateRoute
                  exact
                  path="/contact/edit/:id?"
                  component={ContactEditPage}
                />
                <PrivateRoute
                  exact
                  path="/contact/:id"
                  component={ContactDetails}
                />
                <PrivateRoute
                  exact
                  path="/contact"
                  component={Contact}
                />
                {/* <Route exact path="/" component={Home} /> */}
                {/* <Route path="/contact/edit/:id?" component={ContactEditPage} /> */}
                {/* <Route path="/contact/:id" component={ContactDetails} /> */}
                {/* <Route path="/contact" component={Contact} /> */}
                <Route path="/signUp" component={SignUp} />
              </Switch>
            </main>
          </div>

        </React.Fragment>
      </Router>

    );
  }
}

export default App;
