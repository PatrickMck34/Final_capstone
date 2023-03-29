from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Item, items
from app.forms import ItemForm
from datetime import datetime


item_routes = Blueprint('items', __name__)

@item_routes.route('', methods=['GET'])
def get_reviews():
    its = Item.query.all()
    return [it.to_dict() for it in its]

# @item_routes.route('/<int:id>', methods=['GET'])
# def get_items(id):
#     ret = Item.query.get(id)

#     return [ret.to_dict()]

@item_routes.route('/<int:itemId>', methods=['POST'])
@login_required
def create_item_post(itemId):
    form = ItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        name = form.item_name.data
        price = form.item_price.data
        rating = form.item_rating.data
        description = form.item_description.data
        imageUrl = form.item.imageUrl.data
        new_item = Item(
            item_id=itemId,
            item_name=name,
            item_price=price,
            item_description=description,
            item_imageUrl=imageUrl,
          
            createdAt=datetime.now(),
            updatedAt=datetime.now(),
        )
        db.session.add(new_item)
        db.session.commit()

        ret = Item.query.get(new_item.id)
        return ret.to_dict()

    if form.errors:
        return {"errors": form.errors}