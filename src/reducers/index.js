import { combineReducers } from 'redux';
import auction from './auctionReducer';
import auctions from './auctionsReducer';

export default combineReducers({
  auctions: auctions,
  auction: auction,
});