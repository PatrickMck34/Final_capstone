from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@ user_routes.route('/<int:userId>/user', methods=['Post'])
@ login_required
def create_user_user(userId):
    form = UserForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        user = form.user.data
        

        new_user = User(
            user=user,
            userId=userId,
            createdAt=datetime.now(),
            updatedAt=datetime.now()
        )
        db.session.add(new_user)
        db.session.commit()

        ret = User.query.get(new_user.id)
        return ret.to_dict()

    if form.errors:
        return {"errors": form.errors}
