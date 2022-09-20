import * as types from "./actionTypes"
import axios from "axios"
export const getPerson=(params)=>(dispatch)=>{
    dispatch({type:types.GET_PERSON_DATA_REQUEST})
    return axios.get(`https://infinite-wave-42614.herokuapp.com/profile`,params).then((res)=>{
        console.log(res)
        return dispatch({type:types.GET_PERSON_DATA_SUCCESS,payload:res.data})
     }).catch((err)=>{
        dispatch(
            {type:types.GET_PERSON_DATA_FAILURE}
        )
     })
}

const addData=(payload)=>{
    return {
        type:types.GET_TEAM_DATA_SUCCESS,
        payload,
    }
}
export default addData