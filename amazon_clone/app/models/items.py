from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Item(db.Model):
    __tablename__ = 'items'
   
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String)
    rating = db.Column(db.Integer)
    imageUrl = db.Column(db.String)




    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.desctription,
            'rating': self.rating,
            'imageUrl': self.imageUrl,

        }
