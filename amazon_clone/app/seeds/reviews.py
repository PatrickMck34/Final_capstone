from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_reviews():
    review5 = Review(
        # user_id = 10,
        review = "It was ok, money almost",
        item_id = 2,
        user_name = "John"
    )
    review5 = Review(
        # user_id = 10,
        review = "It was ok, money almost",
        item_id = 1,
        user_name = "John")

    review5 = Review(
        # user_id = 10,
        review = "It was ok, money almost",
        item_id = 3,
        user_name = "John"
      
    )
    review6 = Review(
        # user_id = 9,
        review = "It was ok, almost",
        item_id = 4,
        user_name = "bob"
      
    )
    review5 = Review(
        # user_id = 10,
        review = "It was ok, money almost",
        item_id = 5,
        user_name = "John"
    )
    review5 = Review(
        # user_id = 10,
        review = "It was ok, money almost",
        item_id = 6,
        user_name = "John"
    )
    reviews = [ review5, review6]
    add_reviews = [db.session.add(review) for review in reviews]
    db.session.commit()

def undo_reviews():
    if environment =="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE")
    # else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()