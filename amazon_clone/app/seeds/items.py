from app.models import db, Items, environment, SCHEMA
from sqlalchemy.sql import text

def seed_items():
    Kindle = Item(
        name="Amazon Kindle Fire", price=299.00, rating=3)
    Toolkit = Item(
        name="KingTool 325 piece Home Repair Toolkit", price=179.00, rating=4)
    Knife = Item(
        name="ASETY Demascus Knife Set 3PCS, NSF Food-Safe Kitchen Knife Set", price=179.99, rating=5)

    db.session.add(Kindle)
    db.session.add(Toolkit)
    db.session.add(Knife)
    db.session.commit()
