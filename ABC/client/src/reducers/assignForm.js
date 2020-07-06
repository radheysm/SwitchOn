import {
    ASSIGNFORM,
    ASSIGN_ERROR,
    GET_FORMS,
} from '../actions/types';


const initialState = {
    assignForms:[],
    assignForm:null,
    loading:true,
    error:{}
};

export default function(state = initialState, action){
    const{type, payload} = action;
     switch(type){
          case ASSIGNFORM:
              return {
                  ...state,
                  assignForms:[payload, ...state.assignForms],
                  loading:false
              }
          
          case ASSIGN_ERROR:
              return{
                 ...state,
                 error:payload,
                 loading:false
              }
              case GET_FORMS:
                return{
                 ...state,
                 assignForms:payload,
                 loading:false
                }
          default:
              return state;
     }
};