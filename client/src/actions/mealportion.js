import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_MEAL_PORTION,
  ADD_MEAL_PORTION,
  UPDATE_MEAL_PORTION
} from './types';

// Get posts
export const getMealPortions = (mealid) => async (dispatch) => {
  try {
    const res = await api.get(`/mealportion/meal/${mealid}`);

    dispatch({
      type: GET_MEAL_PORTION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_MEAL_PORTION,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add mealPortion
export const addMealPortions = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/mealportion/create', formData);

    dispatch({
      type: ADD_MEAL_PORTION,
      payload: res.data
    });

    dispatch(setAlert('Portion Created', 'success'));
  } catch (err) {
    dispatch({
      type: ADD_MEAL_PORTION,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add mealPortion
export const updateMealPortions = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const res = await api.put('/mealportion/update', formData);
    console.log(res);
    dispatch({
      type: UPDATE_MEAL_PORTION,
      payload: res.data
    });

    dispatch(setAlert('Portion Updated', 'success'));
  } catch (err) {
    dispatch({
      type: UPDATE_MEAL_PORTION,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

