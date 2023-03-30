from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Review, User
from app.forms import ReviewForm
from datetime import datetime

review_routes = Blueprint('reviews', __name__)

@review_routes.route('', methods=['GET'])
def get_reviews():
    revs = Review.query.all()
    return [rev.to_dict() for rev in revs]

@review_routes.route('/<int:item_id>', methods=['GET'])
def get_reviews2(item_id):
    userReviews = Review.query.filter(Review.item_id==item_id)
    return [userReview.to_dict() for userReview in userReviews]
    # return [userReviews.to_dict() ]




@review_routes.route("/add/<int:itemId>", methods=['POST'])
@login_required
def create_review_post(itemId):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    userReviews = form.review.data
     
    new_review=Review(
         
            review=userReviews,
            item_id=itemId,
          
 
        )
    db.session.add(new_review)
    db.session.commit()

    retu = Review.query.get(new_review.id)
    return [retu.to_dict()]

    if form.errors:
        return {"errors": form.errors}

@review_routes.route('/edit/<int:reviewId>', methods=['PUT'])
@login_required
def edit_reviews(reviewId):

    userReviews = Review.query.get(reviewId)
    res = request.get_json()
    if userReviews:
        userReviews.review=res["review"]
        db.session.commit()
     
        return userReviews.to_dict()
    
    
   

@review_routes.route('/<int:reviewsId>', methods=['DELETE'])
@login_required
def delete_reviews(reviewsId):
    reviews = Review.query.get(reviewsId)
    
    if not reviews:
        return {"errors": ["Invalid Delete Request"]}
    
    db.session.delete(reviews)
    db.session.commit()
    return {"id": reviews.id}