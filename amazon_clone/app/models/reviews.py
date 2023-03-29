from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from .user import User
from .items import Item


class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(200))
    user_id = db.Column(db.Integer, db.ForeignKey)
    item_id = db.Column(db.Integer, db.ForeignKey)
    user_name = db.Column(db.String(30))

    user = db.relationship("User", back_populates="reviews")
    items = db.relationship("Item", back_populates="reviews")





    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'user_name': self.user_name,
            # "user": self.User.to_dict(),
            "items": self.items.to_dict(),

           }