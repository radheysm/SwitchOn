import axios from 'axios';
import {setAlert} from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE,
    GET_USERS
} from './types';

import setAuthToken from '../utills/setAuthToken';

// Load User

export const loadUser = () => async dispatch =>{
    if(localStorage.token){
         setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('http://localhost:5001/api/auth');
        dispatch({
            type:USER_LOADED,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type:AUTH_ERROR
        });
    }
}


// Register User

export const register = ({name, email, department, password}) => async dispatch =>{
    console.log(name,email,department,password);
    
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({name, email, department, password});

    try {
        const res = await axios.post('http://localhost:5001/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload:res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type:REGISTER_FAIL
        });
    }

};

// Login User

export const login = (email, password) => async dispatch => {

    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({email, password});
    try {
        const res = await axios.post('http://localhost:5001/api/auth', body, config);
        console.log(res.data); 
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type:LOGIN_FAIL
        });
    }
};

// Logout

export const logout = () => dispatch => {
    dispatch({type:CLEAR_PROFILE});
    dispatch({type:LOGOUT});
    
}

// GET ALL USERS 


export const getUsers = () => async(dispatch) =>{
    try {
        const res = await axios.get('http://localhost:5001/api/auth/all');
        // console.log(res.data.Array);
        dispatch({
            type:GET_USERS,
            payload:res.data
        });

    } catch (err) {
        console.error(err.message);
    }
} 