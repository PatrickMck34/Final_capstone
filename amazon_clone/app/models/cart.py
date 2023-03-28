from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Cart(db.Model):
    __tableitems__ = 'carts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    _id = db.Column(db.Integer, primary_key=True)
    items = db.Column(db.String, nullable=False)
    userId = db.Column(db.Integer, nullable=False)
    




    def to_dict(self):
        return {
            'id': self.id,
            'items': self.items,
            'userId': self.userId,
           
        }
