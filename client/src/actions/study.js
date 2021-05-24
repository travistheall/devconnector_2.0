import api from '../utils/api';
import {
  GET_STUDIES,
  SET_STUDY,
} from './types';

// get studies
export const getStudies = () => async dispatch => {
  try {
    const res = await api.get(`/study/getall`);
    dispatch({
      type: GET_STUDIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_STUDIES,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// set study
export const getStudyByAbbrev = (abbrev) => async dispatch => {
  try {
    const res = await api.get(`/study/abbrev/${abbrev}`);
    dispatch({
      type: SET_STUDY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SET_STUDY,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// set study
export const setStudy = (studyId) => async dispatch => {
  try {
    const res = await api.get(`/study/id/${studyId}`);
    dispatch({
      type: SET_STUDY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SET_STUDY,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
