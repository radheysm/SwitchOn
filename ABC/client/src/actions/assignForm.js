import axios from 'axios';
import {setAlert} from './alert';
import {
    ASSIGNFORM,
    ASSIGN_ERROR,
    GET_FORMS,
    POST_ERROR
} from './types';


// add Forms

export const assignForm = ({text,assignTo}) => async dispatch => {
    // console.log(formData);
    // console.log(text,assignTo);
    const config = {
        headers:{
            'Content-Type':'application/json',
        }
    }
    const body = JSON.stringify({text,assignTo});
    // console.log(formData);
    try {
        const res = await axios.post('http://localhost:5001/api/assignForm', body, config);
        dispatch({
            type:ASSIGNFORM,
            payload:res.data
        });
         dispatch(setAlert('Form Assigned To The User', 'success'));
    } catch (err) {
        dispatch({
            type:ASSIGN_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}

        });
    }
}

// get all forms

export const getForms = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5001/api/assignForm');
        dispatch({
            type:GET_FORMS,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}

        });
    }
}