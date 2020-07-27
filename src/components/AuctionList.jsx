import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AuctionsList extends Component {

  render() {
    console.log(this.props);
    if(this.props.auctions.length) {
      return (
        <div>
          <h4>Auctions</h4>
          {this.props.auctions.map(auction => {
            return (
              <div key={ auction.auctionItemId }>
                <hr/>    
                <p><Link to={`/auctions/${auction.auctionItemId}`}>Id:{auction.auctionItemId}</Link></p>
                <p>Price:{auction.reservePrice}</p>
                <p>ItemId:{auction.item.itemId}</p>
                <p>Description:{auction.item.description}</p>
              </div>
            );
          })}
        </div>
      )    
    } else {
      return (<div>No auctions</div>)
    }
  }
}

const mapStateToProps = (state) => ({ auctions: state.auctions });

export default connect(mapStateToProps)(AuctionsList);