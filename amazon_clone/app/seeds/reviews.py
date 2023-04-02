from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_reviews():
    review4 = Review(
        # user_id = 10,
        review = "Half the money, twice the value!",
        item_id = 2,
        user_name = "John"
    )
    review3 = Review(
        # user_id = 10,
        review = "It was ok, money almost worth buying two!",
        item_id = 1,
        user_name = "John")

    review2 = Review(
        # user_id = 10,
        review = "Im so glad I bought this! exactly what I wanted!",
        item_id = 3,
        user_name = "John"
      
    )
    review6 = Review(
        # user_id = 9,
        review = "I would reccomend to a friend, but maybe not family",
        item_id = 4,
        user_name = "bob"
      
    )
    review1 = Review(
        # user_id = 10,
        review = "I thought it was alright for the money I paid",
        item_id = 5,
        user_name = "John"
    )
    review5 = Review(
        # user_id = 10,
        review = "I was a little disappointed",
        item_id = 6,
        user_name = "John"
    )
    reviews = [review1, review2, review3, review4, review5, review6]
    add_reviews = [db.session.add(review) for review in reviews]
    db.session.commit()

def undo_reviews():
    if environment =="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE")
    # else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()