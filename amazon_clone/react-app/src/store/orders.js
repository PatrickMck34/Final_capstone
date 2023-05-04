const READ_ORDER = '/orders'
const DELETE_ORDER = '/order/:ItemId';
const CREATE_ORDER = '/order/new'
const READ_ORDERITEM = '/order/:itemId'
const READ_CART ='/order/order'

export const createOrderItem = (userId) => async (dispatch) => {

    const data = await fetch(`/api/order/add/kind/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createOrderItems(response))
    return response
}
export const createOrderItem2 = (userId) => async (dispatch) => {
    const data = await fetch(`/api/order/add/tool/set/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createOrderItems(response))
    return response
}
export const createOrderItem3 = (userId) => async (dispatch) => {

    const data = await fetch(`/api/order/add/knife/new/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createOrderItems(response))
    return response
}
export const createOrderItem4 = (userId) => async (dispatch) => {

    const data = await fetch(`/api/order/add/globe/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createOrderItems(response))
    return response
}
export const createOrderItem5 = (userId) => async (dispatch) => {

    const data = await fetch(`/api/order/add/mask/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createOrderItems(response))
    return response
}
export const createOrderItem6 = (userId) => async (dispatch) => {

    const data = await fetch(`/api/order/add/new/monitor/${userId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
           
        }),
    });
    const response = await data.json()
    
    dispatch(createOrderItems(response))
    return response
}

export const createOrderItems = (Item) =>({
    type: CREATE_ORDER,
    payload: Item
})
export const getOrderItem = (user_id) => async (dispatch) => {
const data = await fetch(`/api/order/${user_id}`)
if (data.ok) {
    const response = await data.json()
    dispatch(getAllOrderItems(response))
    return response
}
}


export const getAllOrderItems = () => async (dispatch) => {
    const data = await fetch(`/api/order`)
    if (data.ok) {
        const response = await data.json()
        dispatch(getOrderItems(response))
        return response
    }
    }
export const getOrderItems = (Item) =>({
    type: READ_ORDER,
    payload: Item
})

export const getCart = ({id}, {title}, {image}, {price}, {rating}) =>({
    type: READ_CART,
    payload: ({id}, {title}, {image}, {price}, {rating})
})
export const deleteOrderItems = (itemId) => async (dispatch) => {
    const response = await fetch(`/api/order/${itemId}`, {
        method: 'DELETE',
    });
    dispatch(deleteOrderItem(itemId));
    return response;
};
export  const deleteOrderItem = (itemId) => {
    return {
        type: DELETE_ORDER,
        itemId
    };
};

const initialState =  {allItems:{}, singleItem: {}}
export default function cartReducer(state = initialState, action) {
    let newState = {...state}
    
    switch (action.type) {
               case CREATE_ORDER:
                 newState = { allItems:{}} 
                newState.allItems = action.payload
                return newState

                case READ_ORDER:
                    const variable = action.payload.reduce((acc, item) => {
                        acc[item.id] = item
                        return acc
                    }, {})
                    newState.allItems = variable
                    return newState

                case READ_ORDERITEM:
                 newState ={...state, singleItem: {} };
                 newState.singleItem[action.payload] = action.payload
                return newState
                case READ_CART:
                 newState ={...state, singleItem: {} };
                 newState.singleItem = {...state, singeItem:{}}
                return newState

                case DELETE_ORDER:
             newState = {...state}
             delete newState[action.payload]
            return state
      default:
    return state
}}
