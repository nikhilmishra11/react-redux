import { RECEIVE_AUCTIONS, ADD_AUCTION } from '../actions';

const initialState = { auctions: [] }
export default function auctionsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_AUCTIONS:
      return action.auctions;
    case ADD_AUCTION:
      return [action.payload, ...state];
    default:
      return state;
  }
}