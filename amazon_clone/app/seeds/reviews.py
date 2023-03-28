from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_reviews():
    review1 = Review(
        user_id = 1,
        review = "Wonderful item, must buy!",
        item_id = 1,
        user_name = "Sally"
     
    )
    review2 = Review(
        user_id = 2,
        review = "I would reccomend to anyone!",
        item_id = 2,
        user_name = "Joe"
        
    )
    review4 = Review(
        user_id = 2,
        review = "It was worth the money almost",
        item_id = 3,
        user_name = "Cindy"
      
    )
    review5 = Review(
        user_id = 2,
        review = "It was ok, money almost",
        item_id = 3,
        user_name = "John"
      
    )
    review6 = Review(
        user_id = 1,
        review = "It was ok, almost",
        item_id = 3,
        user_name = "bob"
      
    )
    reviews = [review1, review2, review4, review5, review6]
    add_reviews = [db.session.add(review) for review in reviews]
    db.session.commit()

def undo_reviews():
    if environment =="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE")
    # else:
    #     db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()