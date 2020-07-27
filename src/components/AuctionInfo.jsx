import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuction} from '../actions';

class AuctionInfo extends Component {
  componentDidMount() {
    this.props.getAuction(this.props.match.params.id);
  }

  render() {
    const auction = this.props.auction;
    console.log(auction);
    return (
      <div>
        <h2>{auction.auctionItemId}</h2>
        <p>{auction.reservePrice}</p>
        <p>{auction.item ? auction.item.itemId : '' }</p>
        <p>{auction.item ? auction.item.description: ''}</p>
        <div className="btn-group">
          <Link to="/auctions" className="btn btn-secondary">Close</Link>
        </div>
        <hr/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ auction: state.auction });

const mapDispatchToProps = { getAuction };

export default connect(mapStateToProps, mapDispatchToProps)(AuctionInfo);