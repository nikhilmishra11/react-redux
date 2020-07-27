import { RECEIVE_AUCTION } from '../actions';
export default function auctionReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_AUCTION:
      return action.auction;
    default:
      return state;
  }
};
