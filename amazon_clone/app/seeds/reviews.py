from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_reviews():
    review1 = Review(
        userId = 1,
        review = "Wonderful item, must buy!",
        itemId = 1,
        userName = "Sally"
     
    )
    review2 = Review(
        userId = 2,
        review = "I would reccomend to anyone!",
        itemId = 2,
        userName = "Joe"
        
    )
    review4 = Review(
        userId = 2,
        review = "It was worth the money almost",
        itemId = 3,
        userName = "Cindy"
      
    )
    review5 = Review(
        userId = 2,
        review = "It was ok, money almost",
        itemId = 3,
        userName = "John"
      
    )
    review6 = Review(
        userId = 1,
        review = "It was ok, almost",
        itemId = 3,
        userName = "bob"
      
    )
    reviews = [review1, review2, review4, review5, review6]
    add_reviews = [db.session.add(review) for review in reviews]
    db.session.commit()

def undo_reviews():
    if environment =="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE")
    else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()