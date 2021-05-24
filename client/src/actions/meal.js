import api from '../utils/api';
import {
    GET_MEAL_BY_PARTICIPANT
} from './types';

// get participants
export const getMealsByParticipant = (participantId) => async dispatch => {
  try {
    const res = await api.get(`/meal/participant/${participantId}`);
    dispatch({
      type: GET_MEAL_BY_PARTICIPANT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_MEAL_BY_PARTICIPANT,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
