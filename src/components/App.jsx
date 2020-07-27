import React, { Component } from 'react';
import AuctionAdd from './AuctionAdd';
import AuctionList from './AuctionList';
import AuctionInfo from './AuctionInfo';
import {Router, Route, NavLink, Switch} from 'react-router-dom'
import history from '../history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/auctions">Auctions</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/auctions/new">Add Auction</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={AuctionList} />
    <Route exact path="/auctions" component={AuctionList} />
    <Route exact path="/auctions/new" component={AuctionAdd} />
    <Route exact path="/auctions/:id" component={AuctionInfo} />
  </Switch>
);

export default App;
