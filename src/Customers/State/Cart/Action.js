import { api } from "../../../config/api";

const getCartItemRequest = () => ({ type: "GET_CART_ITEM_REQUEST" });
const getCartItemSuccess = (data) => ({ type: "GET_CART_ITEM_SUCCESS", payload: data });
const getCartItemFailure = (error) => ({ type: "GET_CART_ITEM_FAILURE", payload: error });

const updateCartRequest = () => ({ type: "UPDATE_CART_REQUEST" });
const updateCartSuccess = (data) => ({ type: "UPDATE_CART_SUCCESS", payload: data });
const updateCartFailure = (error) => ({ type: "UPDATE_CART_FAILURE", payload: error });

const removeCartRequest = () => ({ type: "REMOVE_CART_REQUEST" });
const removeCartSuccess = (id) => ({ type: "REMOVE_CART_SUCCESS", payload: id });
const removeCartFailure = (error) => ({ type: "REMOVE_CART_FAILURE", payload: error });

const addCartRequest = () => ({ type: "ADD_CART_REQUEST" });
const addCartSuccess = (item) => ({ type: "ADD_CART_SUCCESS", payload: item });
const addCartFailure = (error) => ({ type: "ADD_CART_FAILURE", payload: error });


const addCartItem=(reqdata)=>async(dispatch)=>{
    dispatch(addCartRequest())
    console.log("reqdata",reqdata);
    
    try {
        const {data}=await api.post("/api/cart/add",reqdata)
        console.log("Cart",data);
        
        dispatch(addCartSuccess(data))
    } catch (error) {
        dispatch(addCartFailure(error.message))
    }
}

const removeCartItem=(reqdata)=>async(dispatch)=>{
    console.log(reqdata);
    
    dispatch(removeCartRequest())
    try {
        const {data}=await api.post("/api/cart/delete",reqdata)
        dispatch(removeCartSuccess(data.id))
        console.log("deleted data",data.id);
        
    } catch (error) {
        dispatch(removeCartFailure(error.message))
    }
}
const updateCartItem=(reqdata)=>async(dispatch)=>{
    console.log(reqdata);
    
    dispatch(updateCartRequest())
    try {
        const {data}=await api.post("/api/cart/update",reqdata)
        dispatch(updateCartSuccess(data.cartItemId))
    } catch (error) {
        dispatch(updateCartFailure(error.message))
    }
}   
const getCartItem=(reqdata)=>async(dispatch)=>{
    dispatch(getCartItemRequest())
    try {
        const {data}=await api.get("/api/cart/",{reqdata})
        dispatch(getCartItemSuccess(data))
    } catch (error) {
        dispatch(getCartItemFailure(error.message))
    }
}

 export {addCartItem,getCartItem,removeCartItem,updateCartItem}