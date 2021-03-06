import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    DELETE_ACCOUNT,
    GET_USERS
} from '../actions/types';

const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    user:null,
    users:[]
};


export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:payload
            }

        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }
        case DELETE_ACCOUNT:
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }
        case GET_USERS:
            return{
                ...state,
                  users:[...state.users, payload],
                  loading:false
            }
        default:
            return state;


    }

}