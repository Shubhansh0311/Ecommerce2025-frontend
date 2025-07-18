import axios from "axios"
import { api, BASE_URL } from "../../../config/api.js"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./Action_type.js"
import { getCartItem } from "../Cart/Action.js"

const token=localStorage.getItem('jwt')

const registerRequest=()=>({type:REGISTER_REQUEST})
const registerSuccess=(user)=>({type:REGISTER_SUCCESS,payload:user})
const registerFailure=(error)=>({type:REGISTER_FAILURE,payload:error})

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type:GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
   
    dispatch(getUserRequest());
    try {
        const response = await api.get(`/api/users/profile`,{
            headers:{
                "Authorization":`Bearer ${token}` 
            }
        });
        const user = response.data;
    
        // console.log(user);
        dispatch(getCartItem())
        dispatch(getUserSuccess(user));
       
    } catch (error) {
        dispatch(getUserFailure(error.message));
    }
};



export const register=(userData)=>async(dispatch)=>{
    dispatch(registerRequest())
try {
    
    const response=await api.post(`/auth/signup`,userData)
    const user=response.data
    if(user.jwt){
        localStorage.setItem("jwt",user.jwt)
    }
    // console.log("register*** user",user);
    
    

    dispatch(registerSuccess(user))
 
} catch (error) {
    dispatch(registerFailure(error.message))
}
}





export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(`${BASE_URL}/auth/signin`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
            dispatch(loginSuccess(user.jwt));
            dispatch(getCartItem())
            window.location.href="/"
        }
        // console.log(user);
        
        
        
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};
                   






export const logout = (userData) => async (dispatch) => {
    dispatch({type:"LOGOUT",payload:null})
    localStorage.clear()
    window.location.href="/"
};

