const initialstate={
    orders:[],
    order:null,
    isLoading:false,
    error:null

}

export const orderReducer = (state = initialstate, action) => {
    switch(action.type){
        case 'CREATE_ORDER_REQUEST':
        case "GET_ORDER_BY_ID_REQUEST":
        case "GET_ORDER_HISTORY_REQUEST":
        return{...state,isLoading:true,error:null}

case "CREATE_ORDER_SUCCESS":
return{...state, order:action.payload,isLoading:false,error:null}

case "GET_ORDER_BY_ID_SUCCESS":
    return{...state,order:action.payload,isLoading:false,error:null}

case "CREATE_ORDER_FAILURE":
    case "GET_ORDER_BY_ID_FAILURE":
        return{...state,isLoading:false,error:action.payload}

        default:
        return {state}
    }
};