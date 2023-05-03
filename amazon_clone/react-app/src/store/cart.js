const READ_ITEMS = '/carts'
const DELETE_ITEM = '/cart/:ItemId';
const CREATE_CARTITEM = '/cart/new'
const READ_ITEM = '/cart/:itemId'
const READ_CART ='/cart/cart'

export const createCartItem = (userId) => async (dispatch) => {

    const data = await fetch(`/api/cart/add/kind/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createCartItems(response))
    return response
}
export const createCartItem2 = (userId) => async (dispatch) => {
    const data = await fetch(`/api/cart/add/tool/set/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createCartItems(response))
    return response
}
export const createCartItem3 = (userId) => async (dispatch) => {

    const data = await fetch(`/api/cart/add/knife/new/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createCartItems(response))
    return response
}
export const createCartItem4 = (userId) => async (dispatch) => {

    const data = await fetch(`/api/cart/add/globe/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createCartItems(response))
    return response
}
export const createCartItem5 = (userId) => async (dispatch) => {

    const data = await fetch(`/api/cart/add/mask/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createCartItems(response))
    return response
}
export const createCartItem6 = (userId) => async (dispatch) => {

    const data = await fetch(`/api/cart/add/new/monitor/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createCartItems(response))
    return response
}

export const createCartItems = (Item) =>({
    type: CREATE_CARTITEM,
    payload: Item
})
export const getCartItem = (user_id) => async (dispatch) => {
const data = await fetch(`/api/cart/${user_id}`)
if (data.ok) {
    const response = await data.json()
    dispatch(getAllCartItems(response))
    return response
}
}


export const getAllCartItems = () => async (dispatch) => {
    const data = await fetch(`/api/cart`)
    if (data.ok) {
        const response = await data.json()
        dispatch(getCartItems(response))
        return response
    }
    }
export const getCartItems = (Item) =>({
    type: READ_ITEMS,
    payload: Item
})

export const getCart = ({id}, {title}, {image}, {price}, {rating}) =>({
    type: READ_CART,
    payload: ({id}, {title}, {image}, {price}, {rating})
})
export const deleteCartItems = (itemId) => async (dispatch) => {
    const response = await fetch(`/api/cart/${itemId}`, {
        method: 'DELETE',
    });
    dispatch(deleteCartItem(itemId));
    return response;
};
export  const deleteCartItem = (itemId) => {
    return {
        type: DELETE_ITEM,
        itemId
    };
};

const initialState =  {allItems:{}, singleItem: {}}
export default function cartReducer(state = initialState, action) {
    let newState = {...state}
    
    switch (action.type) {
               case CREATE_CARTITEM:
                 newState = { allItems:{}} 
                newState.allItems = action.payload
                return newState

                case READ_ITEMS:
                    const variable = action.payload.reduce((acc, item) => {
                        acc[item.id] = item
                        return acc
                    }, {})
                    newState.allItems = variable
                    return newState

                case READ_ITEM:
                 newState ={...state, singleItem: {} };
                 newState.singleItem[action.payload] = action.payload
                return newState
                case READ_CART:
                 newState ={...state, singleItem: {} };
                 newState.singleItem = {...state, singeItem:{}}
                return newState

                case DELETE_ITEM:
             newState = {...state}
             delete newState[action.payload]
            return state
      default:
    return state
}}
