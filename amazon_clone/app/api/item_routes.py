from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Item, items
from app.forms import ItemForm
from datetime import datetime


item_routes = Blueprint('items', __name__)

@item_routes.route('/items')
@login_required
def items():
    """
    Query for all items and returns them in a list of item dictionaries
    """
    items = item.query.all()
    return {'items': [item.to_dict() for item in items]}