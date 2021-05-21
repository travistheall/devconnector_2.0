import api from '../utils/api';
import {
    GET_PORTIONS,
} from './types';

// get foods
export const getFoodPortions = (foodid) => async dispatch => {
  try {
    const res = await api.get(`/foodport/foodid/${foodid}`);
    dispatch({
      type: GET_PORTIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PORTIONS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
