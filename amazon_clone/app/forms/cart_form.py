from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CartForm(FlaskForm):
    user_id = IntegerField("UserID", validators=[DataRequired()])
    items = StringField("Items",)
