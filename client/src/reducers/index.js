import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import food from './food';
import foodportions from './foodportions';
import study from './study';
import participant from './participant';
import meal from './meal';
import mealportion from './mealportion';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  food,
  foodportions,
  study,
  participant,
  meal,
  mealportion
});
