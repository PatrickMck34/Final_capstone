from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .user import User

class Cart(db.Model):
    __tablename__ = 'cart'
   
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    # user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    name = db.Column(db.String(200), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(200))
    rating = db.Column(db.Integer)
    imageUrl = db.Column(db.String(300))
    # user = db.relationship("User", back_populates=("cart"))
  




    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'rating': self.rating,
            'imageUrl': self.imageUrl,
            # 'cart': self.cart,

        }