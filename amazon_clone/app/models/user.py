from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
# from .reviews import Reviews
# from .items import Item


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False,)
    email = db.Column(db.String(255), nullable=False,)
    hashed_password = db.Column(db.String(255), nullable=False)
    # reviews = db.relationship("Review", back_populates="user")
    carts = db.relationship("Cart", back_populates="user")

    

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            # 'reviews': [Review.allReviews.to_dict() for reviews in self.reviews],
            'carts': [cart.to_dict() for cart in self.carts]
         



        }
