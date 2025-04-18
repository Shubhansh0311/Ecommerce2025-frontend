const initialState = {
    cartItems: [],
    cart: null,
    isLoading: false,
    error: null,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CART_ITEM_REQUEST":
        case "ADD_CART_REQUEST":
        case "UPDATE_CART_REQUEST":
        case "REMOVE_CART_REQUEST":
            return { ...state, isLoading: true, error: null };

        case "GET_CART_ITEM_SUCCESS":
            return { ...state, isLoading: false, error: null, cartItems: action.payload.cartItems
                , cart: action.payload };

        case "ADD_CART_SUCCESS":
            return {
                ...state,
                isLoading: false,
                error: null,
                cartItems: [...state.cartItems, action.payload],
                cart: { ...state.cart, items: [...state.cartItems, action.payload] },
            };

        case "UPDATE_CART_SUCCESS":
            return {
                ...state,
                isLoading: false,
                error: null,
                cartItems: state.cartItems.map(item => item._id === action.payload.id ? action.payload : item),
                cart: { ...state.cart, items: state.cartItems.map(item => item._id === action.payload ? action.payload : item) },
            };

        case "REMOVE_CART_SUCCESS":
            return {
                ...state,
                isLoading: false,
                error: null,
                cartItems: state.cartItems.filter(item => item._id !== action.payload),
                cart: { ...state.cart, items: state.cartItems.filter(item => item._id !== action.payload) },
            };

        case "GET_CART_ITEM_FAILURE":
        case "ADD_CART_FAILURE":
        case "UPDATE_CART_FAILURE":
        case "REMOVE_CART_FAILURE":
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};