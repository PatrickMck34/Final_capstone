from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ItemForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    price = IntegerField("Price", validators=[DataRequired()])
    rating = IntegerField("Rating")
