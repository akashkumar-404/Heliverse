import { GET_PERSON_DATA_FAILURE, GET_PERSON_DATA_REQUEST, GET_PERSON_DATA_SUCCESS, GET_TEAM_DATA_SUCCESS } from "./actionTypes";

const initialState = {
  person: [],
  isLoading: false,
  isError: false,
  teams:[]
};

export const AppReducer = (state = initialState,action) => {

  const {type,payload}=action

  switch(type){
    case GET_PERSON_DATA_REQUEST :
        return {
          ...state,
          isLoading:true
        }
         
     case GET_PERSON_DATA_SUCCESS:
        return {
          ...state,
          person:payload,
          isLoading:false,
          isError:false
        }

     case GET_PERSON_DATA_FAILURE:
        return {
          ...state,
          isError:true
        } 
        case GET_TEAM_DATA_SUCCESS:
            return {
              ...state,
             teams:payload
            } 

        default:
          return state;
  }
};