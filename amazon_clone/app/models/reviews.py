from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash


class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(200))
    userId = db.Column(db.Integer)
    itemId = db.Column(db.Integer)
    userName = db.Column(db.String(30))





    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'userId': self.userId,
            'itemId': self.itemId,
            'userName': self.userName,

           
        }