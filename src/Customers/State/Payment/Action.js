import { api } from "../../../config/api"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./Action_type"

const paymentRequest=()=>({type:CREATE_PAYMENT_REQUEST})
const paymentSuccess=(data)=>({type:CREATE_PAYMENT_SUCCESS,payload:data})
const paymentFailure=(error)=>({type:CREATE_PAYMENT_FAILURE,payload:error})

const updatePaymentRequest=()=>({type:UPDATE_PAYMENT_REQUEST})
const updatePaymentSuccess=(data)=>({type:UPDATE_PAYMENT_SUCCESS,payload:data})
const updatePaymentFailure=(error)=>({type:UPDATE_PAYMENT_FAILURE,payload:error})


export const createPayment=(orderId)=>async(dispatch)=>{
dispatch(paymentRequest())


try {
    const {data}=await api.post(`/api/payments/${orderId}`)
    console.log("data",data);
    if(data.paymentLink_url){
        window.location.href=data.paymentLink_url
    }
    dispatch(paymentSuccess(data))
} catch (error) {
    dispatch(paymentFailure(error.message))
}
}
export const updatePayment=(reqData)=>async(dispatch)=>{
    dispatch(updatePaymentRequest())
    try {
        const {data}=await api.get(`/api/payments/?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`)
        dispatch(updatePaymentSuccess(data))
        
    } catch (error) {
        dispatch(updatePaymentFailure(error))
    }
}