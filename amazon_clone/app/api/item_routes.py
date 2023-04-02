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

@item_routes.route('/add/kind', methods=['POST'])
@login_required
def create_item_post():

    new_item = Item(
         
        name="iBUYPOWER Pro Gaming PC",
        price=1698.88,
        rating=4,
        imageUrl='https://m.media-amazon.com/images/I/81YUHsnzj1L._AC_SL1500_.jpg',
     
        )
    db.session.add(new_item)
    db.session.commit()

    ret = Item.query.get(new_item.id)
    return new_item.to_dict()

@item_routes.route('/add/tool/set', methods=['POST'])
@login_required
def create_item2_post():

    new_item = Item(
         
        name="CyberpowerPC Gamer Xtreme VR Gaming PC",
        price=2299.99,
        rating=5,
        imageUrl='https://m.media-amazon.com/images/I/71Lczneb0VL._AC_SL1500_.jpg',
     
        )
    db.session.add(new_item)
    db.session.commit()

    ret = Item.query.get(new_item.id)
    return new_item.to_dict()

@item_routes.route('/add/knife/new', methods=['POST'])
@login_required
def create_item3_post():

    new_item = Item(
         
        name="Alienware Aurora R14 Liquid Cooled Gaming Desktop - AMD Ryzen 9",
        price=2399.97,
        rating=5,
        imageUrl='https://m.media-amazon.com/images/I/713XHpvZRML._AC_SL1500_.jpg',
     
        )
    db.session.add(new_item)
    db.session.commit()

    ret = Item.query.get(new_item.id)
    return new_item.to_dict()

@item_routes.route('/add/globe', methods=['POST'])
@login_required
def create_item4_post():

    new_item = Item(
         
        name="Fly YUTING Gaming Chair, Ergonomic Computer Cockpit Chair with Led Lights,",
        price=9455.15,
        rating=5,
        imageUrl="https://m.media-amazon.com/images/I/61OvRdy6n1L._AC_SL1080_.jpg",
     
        )
    db.session.add(new_item)
    db.session.commit()

    ret = Item.query.get(new_item.id)
    return new_item.to_dict()

@item_routes.route('/add/mask', methods=['POST'])
@login_required
def create_item5_post():

    new_item = Item(
         
        name="YUYTIN Super Deluxe Racing Executive Office Cockpit Gaming Station",
        price=19386.38,
        rating=5,
        imageUrl="https://m.media-amazon.com/images/I/61SZuCXn5hL._AC_SL1200_.jpg",
     
        )
    db.session.add(new_item)
    db.session.commit()

    ret = Item.query.get(new_item.id)
    return new_item.to_dict()

@item_routes.route('/add/new/monitor', methods=['POST'])
@login_required
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
@login_required
def delete_item(itemId):
    item = Item.query.get(itemId)
    
    if not item:
        return {"errors": ["Invalid Delete Request"]}
    
    db.session.delete(item)
    db.session.commit()
    return {"id": item.id}