const READ_ITEMS = '/Items'
const DELETE_ITEM = '/Items/:ItemId';
const CREATE_ITEM = '/Items/new'
const READ_ITEM = '/Items/spotsid'

export const createItem = (items) => async (dispatch) => {
    const {item, rating,} = items
 const data = await fetch(`/api/item` , {
        method: "POST",
        body: JSON.stringify({
           item, rating
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
export const getItem = (itemId) => async (dispatch) => {
const data = await fetch(`/api/item/${itemId}`)
    const response = await data.json()
    dispatch(getItems(response))
    return response
}
export const getItems = (Item) =>({
    type: READ_ITEM,
    payload: Item
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
    let newState = {}
    
    switch (action.type) {
               case CREATE_ITEM:
                 newState = { allItems:{...state.allItems}} 
                newState.allItems[action.payload.id] = action.payload
                return newState

                case READ_ITEMS:
                 newState ={allItems: {} };
                 action.payload.Items.forEach(Items => newState.allItems[Items.id] = Items)
                return newState

                case READ_ITEM:
                 newState ={singleItem: {} };
                 action.payload.Items.forEach(Items => newState.singleItem[Items.id] = Items)
                return newState 

                case DELETE_ITEM:
             newState = {...state}
             delete newState[action.payload]
            
      default:
    return state
}}
