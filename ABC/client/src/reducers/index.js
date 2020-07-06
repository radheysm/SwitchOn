import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import assignForm from './assignForm';
export default combineReducers({
    alert,
    auth,
    assignForm
});