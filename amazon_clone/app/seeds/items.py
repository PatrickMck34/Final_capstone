from app.models import db, Item, environment, SCHEMA
from sqlalchemy.sql import text

def seed_items():
    Kindle = Item(
        name="Amazon Kindle Fire",
        price=299.00,
        rating=3,
        userId=3,
        imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2xs4CcvDoHUKifWct4HZXwQ7C-129lLBrDXaqqH6P-jqVjOD7lEsA_JjFpLey7DUEQ0&usqp=CAU',
        )
    Toolkit = Item(
        name="KingTool 325 piece Home Repair Toolkit",
        price=179.00,
        rating=4,
        userId=2,
        imageUrl='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMIzb1QnMIefo_pgAguHcB7mW4-amOfwlGyX9XNnR69V2glGhU',
        )
    Knife = Item(
        name="ASETY Demascus Knife Set 3PCS, NSF Food-Safe Kitchen Knife Set",
        price=179.99,
        rating=5,
        userId=1,
        imageUrl='https://i.postimg.cc/Zn2MLDYp/knife.jpg',
        )
    Globe = Item(
        name="Magnetic Levitation Floating Globe",
        price=38.99,
        rating=3,
        userId=1,
        imageUrl="https://i.postimg.cc/05DXgZNW/Globe.jpg",
    )
    Mask = Item(
        name="Sleep HeadPhones, White Noise Bluetooth Sleep Mask",
        price=26.99,
        rating=3,
        userId=1,
        imageUrl="https://i.postimg.cc/5NF4Whzc/mask.jpg",
    )
    Monitor = Item(
        name="Samsung - Odyssey Ark 55” LED Curved 4K UHD Gaming Monitor - Black",
        price=1999.99,
        rating=5,
        userId=1,
        imageUrl="https://i.postimg.cc/bNzvkCD4/monitor.jpg",
    )


    items = [Kindle, Toolkit, Knife, Globe, Mask, Monitor]
    add_items = [db.session.add(item) for item in items]
    db.session.commit()

def undo_items():
    if environment =="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.items RESTART IDENTITY CASCADE")
    else:
        db.session.execute(text("DELETE FROM items"))
    db.session.commit()