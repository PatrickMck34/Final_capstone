from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Cart, cart

from datetime import datetime


cart_routes = Blueprint('cart', __name__)

@cart_routes.route('', methods=['GET'])
def get_carts():
    its = Cart.query.all()
    return [it.to_dict() for it in its]

@cart_routes.route('/add/kind', methods=['POST'])
@login_required
def create_cart_post():

    new_cart = Cart(
         
        name="iBUYPOWER Pro Gaming PC",
        price=1698.88,
        rating=4,
        imageUrl='https://m.media-amazon.com/images/I/81YUHsnzj1L._AC_SL1500_.jpg',
     
        )
    db.session.add(new_cart)
    db.session.commit()

    ret = Cart.query.get(new_cart.id)
    return [new_cart.to_dict()]

@cart_routes.route('/add/tool/set', methods=['POST'])
@login_required
def create_cart2_post():

    new_cart = Cart(
         
        name="CyberpowerPC Gamer Xtreme VR Gaming PC",
        price=2299.99,
        rating=5,
        imageUrl='https://m.media-amazon.com/images/I/71Lczneb0VL._AC_SL1500_.jpg',
     
        )
    db.session.add(new_cart)
    db.session.commit()

    ret = Cart.query.get(new_cart.id)
    return [new_cart.to_dict()]

@cart_routes.route('/add/knife/new', methods=['POST'])
@login_required
def create_cart3_post():

    new_cart = Cart(
         
        name="Alienware Aurora R14 Liquid Cooled Gaming Desktop - AMD Ryzen 9",
        price=2399.97,
        rating=5,
        imageUrl='https://m.media-amazon.com/images/I/713XHpvZRML._AC_SL1500_.jpg',
     
        )
    db.session.add(new_cart)
    db.session.commit()

    ret = Cart.query.get(new_cart.id)
    return [new_cart.to_dict()]

@cart_routes.route('/add/globe', methods=['POST'])
@login_required
def create_cart4_post():

    new_cart = Cart(
         
        name="Fly YUTING Gaming Chair, Ergonomic Computer Cockpit Chair with Led Lights,",
        price=9455.15,
        rating=5,
        imageUrl="https://m.media-amazon.com/images/I/61OvRdy6n1L._AC_SL1080_.jpg",
     
        )
    db.session.add(new_cart)
    db.session.commit()

    ret = Cart.query.get(new_cart.id)
    return [new_cart.to_dict()]

@cart_routes.route('/add/mask', methods=['POST'])
@login_required
def create_cart5_post():

    new_cart = Cart(
         
        name="YUYTIN Super Deluxe Racing Executive Office Cockpit Gaming Station",
        price=19386.38,
        rating=5,
        imageUrl="https://m.media-amazon.com/images/I/61SZuCXn5hL._AC_SL1200_.jpg",
     
        )
    db.session.add(new_cart)
    db.session.commit()

    ret = Cart.query.get(new_cart.id)
    return [new_cart.to_dict()]

@cart_routes.route('/add/new/monitor', methods=['POST'])
@login_required
def create_cart6_post():

    new_cart = Cart(
         
        name="Samsung - Odyssey Ark 55” LED Curved 4K UHD Gaming Monitor - Black",
        price=1999.99,
        rating=5,
        imageUrl="https://i.postimg.cc/bNzvkCD4/monitor.jpg",
     
        )
    db.session.add(new_cart)
    db.session.commit()

    ret = Cart.query.get(new_cart.id)
    return [new_cart.to_dict()]

@cart_routes.route('/<int:cartId>', methods=['DELETE'])
@login_required
def delete_cart(cartId):
    cart = Cart.query.get(cartId)
    
    if not cart:
        return {"errors": ["Invalid Delete Request"]}
    
    db.session.delete(cart)
    db.session.commit()
    return {"id": cart.id}

@cart_routes.route('/all', methods=['DELETE'])
@login_required
def delete_All(cartId):
    cart = Cart.query.all()
    
    if not cart:
        return {"errors": ["Invalid Delete Request"]}
    
    db.session.delete(cart)
    db.session.commit()
    return {"id": cart.id}