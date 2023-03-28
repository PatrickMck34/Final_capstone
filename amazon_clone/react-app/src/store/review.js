

const READ_REVIEWS = '/reviews'
const DELETE_REVIEW = '/reviews/:reviewId';
const CREATE_REVIEW = '/reviews/new'
const READ_REVIEW = '/reviews/spotsid'

export const createReviews = ({review, reviewId}) => async (dispatch) => {
    // dispatch(createReview(review))

   const rev = review
    const data = await fetch('/api/reviews/add' , {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            review
        }),
    });

    const response = await data.json()
    dispatch(createReview(response))
    console.log(response)
    return response
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
export const getUserReviews = (id) => async (dispatch) => {
    const data = await fetch(`/api/reviews/${id}`)
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
                 newState = {allReviews:{}} 
                newState.allReviews = action.payload
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
      default:
    return state
}}
