import api from '../utils/api';
import {
  SEARCH_FOODS,
} from './types';

// get foods
export const searchFoods = (searchTerm) => async dispatch => {
  try {
    const res = await api.get(`/food/${searchTerm}`);
    dispatch({
      type: SEARCH_FOODS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FOODS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
