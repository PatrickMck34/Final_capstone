from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Order, orders

from datetime import datetime


order_routes = Blueprint('order', __name__)

@order_routes.route('', methods=['GET'])
def get_orders():
    its = Order.query.all()
    return [it.to_dict() for it in its]

@order_routes.route('/add/orders/kind/<int:userId>', methods=['POST'])
@login_required
def create_order_post(userId):
    
    new_order = Order(
         
        name="iBUYPOWER Pro Gaming PC",
        price=1698.88,
        user_id=userId,
        rating=4,
        imageUrl='https://m.media-amazon.com/images/I/81YUHsnzj1L._AC_SL1500_.jpg',
     
        )
    db.session.add(new_order)
    db.session.commit()

    ret = Order.query.get(new_Order.id)
    return [new_Order.to_dict()]

@order_routes.route('/add/order/tool/set/<int:userId>', methods=['POST'])
@login_required
def create_order2_post(userId):

    new_order = Order(
         
        name="CyberpowerPC Gamer Xtreme VR Gaming PC",
        price=2299.99,
        user_id=userId,
        rating=5,
        imageUrl='https://m.media-amazon.com/images/I/71Lczneb0VL._AC_SL1500_.jpg',
     
        )
    db.session.add(new_order)
    db.session.commit()

    ret = Order.query.get(new_Order.id)
    return [new_Order.to_dict()]

@order_routes.route('/add/knife/new/<int:userId>', methods=['POST'])
@login_required
def create_order3_post(userId):

    new_order = Order(
         
        name="Alienware Aurora R14 Liquid Cooled Gaming Desktop - AMD Ryzen 9",
        price=2399.97,
        user_id=userId,
        rating=5,
        imageUrl='https://m.media-amazon.com/images/I/713XHpvZRML._AC_SL1500_.jpg',
     
        )
    db.session.add(new_order)
    db.session.commit()

    ret = Order.query.get(new_Order.id)
    return [new_Order.to_dict()]

@order_routes.route('/add/order/globe/<int:userId>', methods=['POST'])
@login_required
def create_order4_post(userId):

    new_order = Order(
         
        name="Fly YUTING Gaming Chair, Ergonomic Computer Cockpit Chair with Led Lights,",
        price=9455.15,
        user_id=userId,
        rating=5,
        imageUrl="https://m.media-amazon.com/images/I/61OvRdy6n1L._AC_SL1080_.jpg",
     
        )
    db.session.add(new_order)
    db.session.commit()

    ret = Order.query.get(new_Order.id)
    return [new_Order.to_dict()]

@order_routes.route('/add/order/mask/<int:userId>', methods=['POST'])
@login_required
def create_order5_post(userId):

    new_order = Order(
         
        name="YUYTIN Super Deluxe Racing Executive Office Cockpit Gaming Station",
        price=19386.38,
        user_id=userId,
        rating=5,
        imageUrl="https://m.media-amazon.com/images/I/61SZuCXn5hL._AC_SL1200_.jpg",
     
        )
    db.session.add(new_order)
    db.session.commit()

    ret = Order.query.get(new_Order.id)
    return [new_Order.to_dict()]

@order_routes.route('/add/order/new/monitor/<int:userId>', methods=['POST'])
@login_required
def create_order6_post(userId):

    new_order = Order(
         
        name="Samsung - Odyssey Ark 55” LED Curved 4K UHD Gaming Monitor - Black",
        price=1999.99,
        user_id=userId,
        rating=5,
        imageUrl="https://i.postimg.cc/bNzvkCD4/monitor.jpg",
     
        )
    db.session.add(new_order)
    db.session.commit()

    ret = Order.query.get(new_Order.id)
    return [new_Order.to_dict()]

@order_routes.route('/<int:orderId>', methods=['DELETE'])
@login_required
def delete_order(userId):
    order = Order.query.get(userId)
    
    if not order:
        return {"errors": ["Invalid Delete Request"]}
    
    db.session.delete(order)
    db.session.commit()
    return {"id": Order.id}

@order_routes.route('/all', methods=['DELETE'])
@login_required
def delete_All(userId):
    order = Order.query.all()
    
    if not order:
        return {"errors": ["Invalid Delete Request"]}
    
    db.session.delete(order)
    db.session.commit()
    return {"id": Order.id}