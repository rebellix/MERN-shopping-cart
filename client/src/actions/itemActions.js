import axios from 'axios';

import {
  ADD_ITEM,
  DELETE_ITEM,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from './types'

export const fetchData = () => dispatch => {
  dispatch(dataRequested());
  axios
    .get('/api/items')
    .then(res => dispatch(dataLoaded(res.data)))
    .catch(err => dispatch(dataError(err)));
}

export const dataRequested = () => {
  return {
    type: FETCH_DATA_REQUEST,
  }
}

export const dataLoaded = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
}

export const dataError = err => {
  return {
    type: FETCH_DATA_ERROR,
    payload: err
  }
}

export const addItem = item => dispatch => {
  axios
    .post('/api/items', item)
    .then(res => dispatch({ 
      type: ADD_ITEM,
      payload: res.data
    }))
}

export const deleteItem = id => dispatch => {
  axios
    .delete(`/api/items/${id}`)
    .then(res => dispatch({ 
      type: DELETE_ITEM,
      payload: id
    }))
}