from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    review = StringField("Review", validators=[DataRequired()])
    user_id = IntegerField("userId")
    item_id = IntegerField("itemId")
    userName = StringField("username")
   
 
    
