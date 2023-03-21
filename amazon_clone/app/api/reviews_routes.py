from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Review, User
from app.forms import ReviewForm
from datetime import datetime

reviews_routes = Blueprint('reviews', __name__)

@reviews_routes.route('/<int:reviewsId>', methods=['PUT', 'PATCH'])
@login_required
def edit_reviews(reviewsId):
    form = reviewsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    reviews = reviews.query.get(reviewsId)
    
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

@reviews_routes.route('/<int:reviewsId>', methods=['DELETE'])
@login_required
def delete_reviews(reviewsId):
    reviews = reviews.query.get(reviewsId)
    
    if not reviews:
        return {"errors": ["Invalid Delete Request"]}
    
    db.session.delete(reviews)
    db.session.commit()
    return {"id": reviews.id}