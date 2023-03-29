from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Cart, Carts
from app.forms import CartForm
from datetime import datetime


cart_routes = Blueprint('carts', __name__)

@cart_routes.route('', methods=['GET'])
def get_reviews():
    its = Cart.query.all()
    return [it.to_dict() for it in its]

@cart_routes.route('/<int:id>', methods=['GET'])
def get_carts(id):
    userCarts = cart.query.filter(cart.user_id==userId)
    return [userCart.to_dict() for userCart in userCarts]


@cart_routes.route('/<int:id>', methods=['POST'])
@login_required
def create_cart_post(id):
    form = cartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        id = form.cart_name.data
        items = form.cart_items.data
        userId = form.cart_userId.data
        new_cart = cart(
            cart_id=cartId,
            cart_items=items,
            user_id=userId
     
        )
        db.session.add(new_cart)
        db.session.commit()

        ret = cart.query.get(new_cart.id)
        return ret.to_dict()

    if form.errors:
        return {"errors": form.errors}