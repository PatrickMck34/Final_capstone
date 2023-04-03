

const READ_REVIEWS = '/reviews'
const DELETE_REVIEW = '/reviews/:reviewId';
const CREATE_REVIEW = '/reviews/new'
const READ_REVIEW = '/reviews/reviewId'
const UPDATE_REVIEW = '/reviews/edit'

export const createReviews = ({rev}, itemId, userName) => async (dispatch) => {
    // dispatch(createReview(review))
const item = itemId
const {review} = rev
const user_name = userName


    const data = await fetch(`/api/reviews/add/${itemId}` , {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            review,
            item,
            user_name
        }),
    });
    
    const response = await data.json()
    dispatch(createReview(response))
    console.log(response)
    return response
}   
export const updateReviews = ({review}, reviewId) => async (dispatch) => {
    // dispatch(createReview(review))
const id = reviewId
const rev = review
    const data = await fetch(`/api/reviews/edit/${id}` , {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            rev,
            reviewId
        }),
    });

    const response = await data.json()
    console.log(data)
    dispatch(updateReview(response))

    return response
}   

export const updateReview = (review) => {
    return {
        type: UPDATE_REVIEW,
        payload: review
    }
}
export const createReview = (review) =>({
    type: CREATE_REVIEW,
    payload: review
})
export const getReviews = () => async (dispatch) => {
const data = await fetch(`/api/reviews`)
    const response = await data.json()
    console.log(response)
    dispatch(getReview(response))
    return response
}
export const getUserReviews = (itemId) => async (dispatch) => {
    const data = await fetch(`/api/reviews/${itemId}`)
        const response = await data.json()
        dispatch(getReview(response))
        return response
    }
export const getReview = (review) =>({
    type: READ_REVIEWS,
    payload: review
})
export const deleteReviews = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    });
    dispatch(deleteReview(reviewId));
    return response;
};
export  const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    };
};

const initialState =  {allReviews:{}, singleReview: {}}
export default function reviewsReducer(state = initialState, action) {
    let newState = {...state}
    
    switch (action.type) {
               case CREATE_REVIEW:
                 newState = {...state, allReviews:{}}
                newState.allReviews[action.payload] = action.payload
                return newState

                case READ_REVIEWS:
                    const variable = action.payload.reduce((acc, post) => {
                        acc[post.id] = post
                        return acc
                    }, {})
                    newState.allReviews = variable
                    return newState
       



                case READ_REVIEW:
                 newState ={singleReview: {} };
                 newState.singleReview = action.payload
                return newState 

                case DELETE_REVIEW:
             newState = {}
             delete newState[action.payload]
            return state
            case UPDATE_REVIEW:
                
            newState.allReviews[action.payload.id] = action.payload
            return newState
      default:
    return state
}}
