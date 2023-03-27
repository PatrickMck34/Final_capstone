from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Review, User
from app.forms import ReviewForm
from datetime import datetime

review_routes = Blueprint('reviews', __name__)

@review_routes.route('', methods=['GET'])
def get_reviews():
    rev = Review.query.all()
    return [rev.to_dict() for rev in revs]

# @review_routes.route('/', methods=['GET'])
# def get_reviews2():
#     reviews = Review.query.all()
#     return [reviews.to_dict() for review in reviews]




@review_routes.route('/add', methods=['POST'])
@login_required
def create_review_post():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        
        review = form.review.data
       
        new_review = Review(
         
            review=review,
          
 
        )
        db.session.add(new_review)
        db.session.commit()

        retu = Review.query.get(new_review.id)
        return [retu.to_dict()]

    if form.errors:
        return {"errors": form.errors}

@review_routes.route('/<int:reviewId>', methods=['PUT', 'PATCH'])
@login_required
def edit_reviews(reviewId):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    reviews = Review.query.get(reviewId)
    
    if not reviews:
        return {"errors": ["Invalid Edit Request"]}
    
    if form.validate_on_submit():
        text = form.reviews.data
        
        if not text:
            return {"errors": ["Invalid Edit Request"]}
        
        reviews.reviews = text
        db.session.commit()
        ret = reviews.query.get(reviewsId)
        return ret.to_dict()
    
    if form.errors:
        return {"errors": form.errors}

@review_routes.route('/<int:reviewsId>', methods=['DELETE'])
@login_required
def delete_reviews(reviewsId):
    reviews = reviews.query.get(reviewsId)
    
    if not reviews:
        return {"errors": ["Invalid Delete Request"]}
    
    db.session.delete(reviews)
    db.session.commit()
    return {"id": reviews.id}