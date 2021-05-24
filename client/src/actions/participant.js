import api from '../utils/api';
import {
    GET_PARTICIPANTS_BY_STUDY,
    SET_PARTICIPANT
} from './types';

// get participants
export const getParticipantsByStudy = (studyId) => async dispatch => {
  try {
    const res = await api.get(`/participant/study/${studyId}`);
    dispatch({
      type: GET_PARTICIPANTS_BY_STUDY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PARTICIPANTS_BY_STUDY,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// get participants
export const setParticipant = (partId) => async dispatch => {
  try {
    const res = await api.get(`/participant/id/${partId}`);
    dispatch({
      type: SET_PARTICIPANT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SET_PARTICIPANT,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
