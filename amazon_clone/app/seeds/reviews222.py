from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_reviews():
    review1 = Review(
        review = "Wonderful crappy place",
     
    )
    review2 = Review(
        review = "Wonderful  place",
        
    )
    review3 = Review(
        review = " crappy place",
      
    )
    reviews = [review1, review2, review3]
    add_reviews = [db.session.add(review) for review in reviews]
    db.session.commit()

def undo_reviews():
    if environment =="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE")
    else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()