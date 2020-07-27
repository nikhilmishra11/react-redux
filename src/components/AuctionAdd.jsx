import React from 'react';
import { connect } from 'react-redux';
import { addAuction } from '../actions';

class AuctionAdd extends React.Component {
  state = { reservePrice: '', itemId: '', description: '' };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addAuction(this.state);
  };

  render() {
    return (
      <div>
        <h4>Add Article</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="number" name="reservePrice" required value={this.state.reservePrice} onChange={this.handleChange} className="form-control" placeholder="Price" />
          </div>
          <div className="form-group">
            <input type="text" name="itemId" required value={this.state.itemId} onChange={this.handleChange} className="form-control" placeholder="Item Id" />
            <textarea name="description" rows="5" required value={this.state.description} onChange={this.handleChange} className="form-control" placeholder="Description" />
          </div>
          <button type="submit" className="btn btn-dark">Add</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addAuction };

export default connect(null, mapDispatchToProps)(AuctionAdd);