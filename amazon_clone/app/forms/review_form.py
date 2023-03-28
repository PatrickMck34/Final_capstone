from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    review = StringField("review")
    userId = IntegerField("userId")
    itemId = IntegerField("itemId")
    userName = StringField("userName")
   
 
    
