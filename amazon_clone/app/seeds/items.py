from app.models import db, Item, environment, SCHEMA
from sqlalchemy.sql import text

def seed_items():
   


    items = []
    add_items = [db.session.add(item) for item in items]
    db.session.commit()

def undo_items():
    if environment =="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.items RESTART IDENTITY CASCADE")
    else:
        db.session.execute(text("DELETE FROM items"))
    db.session.commit()