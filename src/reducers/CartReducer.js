

export const cartReducer = (
    state = {
        error: '',
        loading: true,
        cartItems: []
    },
    action
) =>{
    switch(action.type){
        case 'CART_LIST_ITEM':
            return {
                loading: false,
                error: '', 
                cartItems: action.payload
            }
            
        // case 'CART_REMOVE_ITEM':
        //     return{
        //         ...state,
        //         error: '',
        //         cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
        //     };
        case 'CART_SUCCESS':
            console.log(action.payload,"asdfsad")
            return{
                loading: false,
                cartItems : action.payload
            }
        default:
            return state;
    }
}