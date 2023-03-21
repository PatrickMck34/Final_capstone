from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    review = StringField("Name", validators=[DataRequired()])
    itemId = IntegerField("ItemId", validators=[DataRequired()])
    userId = IntegerField("UserId", validators=[DataRequired()])
