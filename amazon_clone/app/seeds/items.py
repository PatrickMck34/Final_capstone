from app.models import db, Item, environment, SCHEMA
from sqlalchemy.sql import text

def seed_items():
    Computer = Item(
        name = "Dell XPS 13",
        price = "$1,199.99",
        rating = 4.7,
        imageUrl = "https://m.media-amazon.com/images/I/81akZgRkX9S._AC_SL1500_.jpg",
        user_id = 2,
)
    Router = Item(
        name = "Netgear Nighthawk X10 AD7200",
        price = "$449.99",
        rating = 4.2,
        imageUrl = "https://m.media-amazon.com/images/I/61qPCEkLwqL._AC_SL1000_.jpg",
        user_id = 2,
)
    Keyboard = Item(
        name = "Logitech MX Keys",
        price = "$99.99",
        rating = 4.6,
        imageUrl = "https://m.media-amazon.com/images/I/61Ool-DxckL._AC_SL1500_.jpg",
        user_id = 2,
)
    Mouse = Item(
        name = "Logitech MX Master 3",
        price = "$99.99",
        rating = 4.7,
        imageUrl = "https://m.media-amazon.com/images/I/61SzMhxkzFL._AC_SL1500_.jpg",
        user_id = 2,
)
    External_Hard_Drive = Item(
        name = "Seagate Backup Plus Slim",
        price = "$84.99",
        rating = 4.6,
        imageUrl = "https://m.media-amazon.com/images/I/81t2WTRQnGL._AC_SL1500_.jpg",
        user_id = 2,
)
    Webcam = Item(
        name = "Logitech StreamCam",
        price = "$169.99",
        rating = 4.5,
        imageUrl = "https://m.media-amazon.com/images/I/61M28J-ltnL._AC_SL1500_.jpg",
        user_id = 2,
)
    Graphics_Card = Item(
        name = "Nvidia GeForce RTX 3080",
        price = "$1,699.99",
        rating = 4.8,
        imageUrl = "https://m.media-amazon.com/images/I/81V%2BXZl3%2B-L._AC_SL1500_.jpg",
        user_id = 2,
)
    Wireless_Router = Item(
        name = "Asus ROG Rapture GT-AX11000",
        price = "$449.99",
        rating = 4.4,
        imageUrl = "https://m.media-amazon.com/images/I/81t1sOOtTIL._AC_SL1500_.jpg",
        user_id = 2,
)


    items = [
    Computer,
    Router,
    Keyboard,
    Mouse,
    External_Hard_Drive,
    Webcam,
    Graphics_Card,
    Wireless_Router,
]
    add_items = [db.session.add(item) for item in items]
    db.session.commit()

def undo_items():
    if environment =="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.items RESTART IDENTITY CASCADE")
    else:
        db.session.execute(text("DELETE FROM items"))
    db.session.commit()