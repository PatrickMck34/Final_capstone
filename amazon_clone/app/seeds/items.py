from app.models import db, Item, environment, SCHEMA
from sqlalchemy.sql import text

def seed_items():
    Kindle = Item(
        name="Amazon Kindle Fire",
        price=299.00,
        rating=3
        )
    Toolkit = Item(
        name="KingTool 325 piece Home Repair Toolkit",
        price=179.00,
        rating=4
        )
    Knife = Item(
        name="ASETY Demascus Knife Set 3PCS, NSF Food-Safe Kitchen Knife Set",
        price=179.99,
        rating=5
        )

    items = [Kindle, Toolkit, Knife]
    add_items = [db.session.add(item) for item in items]
    db.session.commit()

def undo_items():
    if environment =="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.items RESTART IDENTITY CASCADE")
    else:
        db.session.execute(text("DELETE FROM items"))
    db.session.commit()