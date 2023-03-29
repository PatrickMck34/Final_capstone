const READ_CARTS = '/cart'
const DELETE_CART = '/cart/:CartId';
const CREATE_CART = '/cart/new'


export const createCart = ({cart, CartId}) => async (dispatch) => {
    const {Cart, rating,} = cart


    const data = await fetch(`/api/carts/${CartId}`, {

        method: "POST",
        body: JSON.stringify({
           Cart, 
           rating
        }),
    });
    const response = await data.json()
    
    dispatch(createcart(response))
    return response
}

export const createcart = (Cart) =>({
    type: CREATE_CART,
    payload: Cart
})
export const getCart = (user_id) => async (dispatch) => {
const data = await fetch(`/api/carts/${user_id}`)
if (data.ok) {
    const response = await data.json()
    dispatch(getcart(response))
    return response
}
}
export const getAllcart = () => async (dispatch) => {
    const data = await fetch(`/api/carts`)
    if (data.ok) {
        const response = await data.json()
        dispatch(getcart(response))
        return response
    }
    }
export const getcart = (Cart) =>({
    type: READ_CARTS,
    payload: Cart
})


export const deleteCart = (id) => async (dispatch) => {
    const response = await fetch(`/api/carts/${id}`, {
        method: 'DELETE',
    });
    dispatch(deleteCart(id));
    return response;
};
export  const deleCart = (CartId) => {
    return {
        type: DELETE_CART,
        CartId
    };
};

const initialState =  {allCart:{}, singleCart: {}}
export default function cartReducer(state = initialState, action) {
    let newState = {...state}
    
    switch (action.type) {
               case CREATE_CART:
                 newState = { allcart:{}} 
                newState.allcart = action.payload
                return newState

                case READ_CARTS:
                    const variable = action.payload.reduce((acc, post) => {
                        acc[post.id] = post
                        return acc
                    }, {})
                    newState.allCart = variable
                    return newState

              

                case DELETE_CART:
             newState = {...state}
             delete newState[action.payload]
            return state
      default:
    return state
}}
