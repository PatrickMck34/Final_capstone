from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash


class Review(db.Model,):
    __tableitemId__ = 'reviews'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    id = db.Column(db.Integer, primary_key=True)
    itemId = db.Column(db.String, nullable=False)
    userId = db.Column(db.Integer, nullable=False)
    review = db.Column(db.String, nullable=False)
    




    def to_dict(self):
        return {
            'id': self.id,
            'itemId': self.itemId,
            'userId': self.userId,
            'review': self.review

           
        }