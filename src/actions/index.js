import axios from 'axios';
import history from '../history';

export const RECEIVE_AUCTIONS = 'GET_AUCTIONS';
export const ADD_AUCTION = 'ADD_AUCTION';
export const RECEIVE_AUCTION = 'RECEIVE_AUCTION';
export const REMOVE_AUCTION = 'REMOVE_AUCTION';
export const UPDATE_AUCTION = 'UPDATE_AUCTION';
export const REPLACE_AUCTION = 'REPLACE_AUCTION';

const apiUrl = 'http://localhost:8080/auctionItems';

export const getAuctions = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}`)
      .then(response => {
        dispatch({type: RECEIVE_AUCTIONS, auctions: response.data})
      })
      .catch(error => { throw(error); });
  };
};

export const addAuction = ({ reservePrice, itemId, description}) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`, {reservePrice, item : {itemId, description}})
      .then(response => {
        let data = response.data;
      })
      .then(() => {
        history.push("/auctions")
      })
      .catch(error => { throw(error) });
  };
};

export const getAuction = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${id}`)
      .then(response => {
        dispatch({type: RECEIVE_AUCTION, auction: response.data});
      })
      .catch(error => { 
        throw(error); 
      });
  };
};