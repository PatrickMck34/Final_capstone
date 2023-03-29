const READ_ITEMS = '/Items'
const DELETE_ITEM = '/Items/:ItemId';
const CREATE_ITEM = '/Items/new'
const READ_ITEM = '/Items/:itemId'
const READ_CART ='Items/cart'

export const createItem = ({items, itemId}) => async (dispatch) => {
    const {item, rating,} = items


    const data = await fetch(`/api/items/${itemId}`, {

        method: "POST",
        body: JSON.stringify({
           item, 
           rating
        }),
    });
    const response = await data.json()
    
    dispatch(createItems(response))
    return response
}

export const createItems = (Item) =>({
    type: CREATE_ITEM,
    payload: Item
})
export const getItem = (user_id) => async (dispatch) => {
const data = await fetch(`/api/items/${user_id}`)
if (data.ok) {
    const response = await data.json()
    dispatch(getItems(response))
    return response
}
}
export const getAllItems = () => async (dispatch) => {
    const data = await fetch(`/api/items`)
    if (data.ok) {
        const response = await data.json()
        dispatch(getItems(response))
        return response
    }
    }
export const getItems = (Item) =>({
    type: READ_ITEMS,
    payload: Item
})

export const getCart = ({id}, {title}, {image}, {price}, {rating}) =>({
    type: READ_CART,
    payload: ({id}, {title}, {image}, {price}, {rating})
})
export const deleteItems = (id) => async (dispatch) => {
    const response = await fetch(`/api/item/${id}`, {
        method: 'DELETE',
    });
    dispatch(deleteItem(id));
    return response;
};
export  const deleteItem = (itemId) => {
    return {
        type: DELETE_ITEM,
        itemId
    };
};

const initialState =  {allItems:{}, singleItem: {}}
export default function ItemsReducer(state = initialState, action) {
    let newState = {...state}
    
    switch (action.type) {
               case CREATE_ITEM:
                 newState = { allItems:{}} 
                newState.allItems = action.payload
                return newState

                case READ_ITEMS:
                    const variable = action.payload.reduce((acc, post) => {
                        acc[post.id] = post
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
