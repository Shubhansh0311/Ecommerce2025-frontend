import { api } from "../../../config/api";

const createOrderRequest=(reqData)=>({type: 'CREATE_ORDER_REQUEST', payload: reqData});
const createOrderSuccess=(reqData)=>({type: 'CREATE_ORDER_SUCCESS', payload: reqData}); 
const createOrderFailure=(error)=>({type: 'CREATE_ORDER_FAILURE', payload: error});
const getOrderByIdRequest=(reqData)=>({type: 'GET_ORDER_BY_ID_REQUEST', payload: reqData});
const getOrderByIdSuccess=(reqData)=>({type: 'GET_ORDER_BY_ID_SUCCESS', payload: reqData});
const getOrderByIdFailure=(error)=>({type: 'GET_ORDER_BY_ID_FAILURE', payload: error});
const getOrderHistoryRequest=(reqData)=>({type: 'GET_ORDER_HISTORY_REQUEST', payload: reqData});
const getOrderHistorySuccess=(reqData)=>({type: 'GET_ORDER_HISTORY_SUCCESS', payload: reqData});
const getOrderHistoryFailure=(error)=>({type: 'GET_ORDER_HISTORY_FAILURE', payload: error});


export const createOrder=(reqData)=>async(dispatch)=>{
    dispatch(createOrderRequest())
    try {
        const {data}=await api.post('/api/orders',
            reqData.address
        )
        if(data.id){
            reqData.navigate({search:`step=3&order_id=${data.id}`})
        }
        // console.log("created order",data);
    
        dispatch(createOrderSuccess(data))
    } catch (error) {
        dispatch(createOrderFailure(error.message))
    }   
}
export const getOrderById=(orderId)=>async(dispatch)=>{
    dispatch(getOrderByIdRequest())
    try {
        const {data}=await api.get(`/api/orders/${orderId}`)
        dispatch(getOrderByIdSuccess(data))
    } catch (error) {
        dispatch(getOrderByIdFailure(error.message))
    }   
}   
export const getOrderHistory=(reqData)=>async(dispatch)=>{
    dispatch(getOrderHistoryRequest())
    try {
        const {data}=await api.get('/api/orders/history',reqData)
        dispatch(getOrderHistorySuccess(data))
    } catch (error) {
        dispatch(getOrderHistoryFailure(error.message))
    }   
}
