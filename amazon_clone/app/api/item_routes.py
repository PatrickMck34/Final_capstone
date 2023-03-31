from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Item, items
from app.forms import ItemForm
from datetime import datetime


item_routes = Blueprint('items', __name__)

@item_routes.route('', methods=['GET'])
def get_items():
    its = Item.query.all()
    return [it.to_dict() for it in its]

# @item_routes.route('/<int:userId>', methods=['GET'])
# def get_items(userId):
#     userCarts = Item.query.filter(Item.user_id==userId)
#     return [userCart.to_dict() for userCart in userCarts]


@item_routes.route('/add/1', methods=['POST'])
# @login_required
def create_item1_post():

    new_item = Item(
         
        name="Amazon Kindle",
        price=299,
        rating=4,
        imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2xs4CcvDoHUKifWct4HZXwQ7C-129lLBrDXaqqH6P-jqVjOD7lEsA_JjFpLey7DUEQ0&usqp=CAU',
     
        )
    db.session.add(new_item)
    db.session.commit()

    ret = Item.query.get(new_item.id)
    return new_item.to_dict()

@item_routes.route('/add/2', methods=['POST'])
# @login_required
def create_item2_post():

    new_item = Item(
         
        name="KingTool 325 piece Home Repair Toolkit",
        price=179.00,
        rating=4,
        imageUrl='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMIzb1QnMIefo_pgAguHcB7mW4-amOfwlGyX9XNnR69V2glGhU',
     
        )
    db.session.add(new_item)
    db.session.commit()

    ret = Item.query.get(new_item.id)
    return new_item.to_dict()

@item_routes.route('/add/3', methods=['POST'])
# @login_required
def create_item3_post():

    new_item = Item(
         
        name="ASETY Demascus Knife Set 3PCS, NSF Food-Safe Kitchen Knife Set",
        price=179.99,
        rating=5,
        imageUrl='https://i.postimg.cc/Zn2MLDYp/knife.jpg',
     
        )
    db.session.add(new_item)
    db.session.commit()

    ret = Item.query.get(new_item.id)
    return new_item.to_dict()

@item_routes.route('/add/4', methods=['POST'])
# @login_required
def create_item4_post():

    new_item = Item(
         
        name="Magnetic Levitation Floating Globe",
        price=38.99,
        rating=3,
        imageUrl="https://i.postimg.cc/05DXgZNW/Globe.jpg",
     
        )
    db.session.add(new_item)
    db.session.commit()

    ret = Item.query.get(new_item.id)
    return new_item.to_dict()

@item_routes.route('/add/5', methods=['POST'])
# @login_required
def create_item5_post():

    new_item = Item(
         
        name="Sleep HeadPhones, White Noise Bluetooth Sleep Mask",
        price=26.99,
        rating=3,
        imageUrl="https://i.postimg.cc/5NF4Whzc/mask.jpg",
     
        )
    db.session.add(new_item)
    db.session.commit()

    ret = Item.query.get(new_item.id)
    return new_item.to_dict()

@item_routes.route('/add/6', methods=['POST'])
# @login_required
def create_item6_post():

    new_item = Item(
         
        name="Samsung - Odyssey Ark 55” LED Curved 4K UHD Gaming Monitor - Black",
        price=1999.99,
        rating=5,
        imageUrl="https://i.postimg.cc/bNzvkCD4/monitor.jpg",
     
        )
    db.session.add(new_item)
    db.session.commit()

    ret = Item.query.get(new_item.id)
    return new_item.to_dict()

@item_routes.route('/<int:itemId>', methods=['DELETE'])
# @login_required
def delete_item(itemId):
    item = Item.query.get(itemId)
    
    if not item:
        return {"errors": ["Invalid Delete Request"]}
    
    db.session.delete(item)
    db.session.commit()
    return {"id": item.id}