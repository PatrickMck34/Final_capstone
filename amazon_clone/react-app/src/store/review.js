

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
    return response
}   

export const createReview = (review) =>({
    type: CREATE_REVIEW,
    payload: review
})
export const getReviews = () => async (dispatch) => {
const data = await fetch(`/api/reviews`)
    const response = await data.json()
    dispatch(getReview(response))
    return response
}
export const getReview = (review) =>({
    type: READ_REVIEWS,
    payload: review
})
export const deleteReviews = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
    });
    dispatch(deleteReview(id));
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
    let newState = {}
    
    switch (action.type) {
               case CREATE_REVIEW:
                 newState = {...state, allReviews:{}} 
                newState.allReviews[action.payload.id] = action.payload
                return newState

                case READ_REVIEWS:
                    newState ={allReviews: {} };
                //  action.payload.review.forEach(reviews => newState.allReviews[reviews.id] = reviews)
                return newState
       



                case READ_REVIEW:
                 newState ={singleReview: {} };
                 action.payload.review.allReviews.forEach(reviews => newState.singleReview[reviews.id] = reviews)
                return newState 

                case DELETE_REVIEW:
             newState = {...state}
             delete newState[action.payload]
            return state
      default:
    return state
}}
