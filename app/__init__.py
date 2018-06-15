from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

import os
import stripe


app = Flask(__name__)

#app.config['SECRET_KEY'] = '348032348643'
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://project2:password123@localhost/project2'
#app.config['SQLALCHEMY_ECHO'] = True
#db = SQLAlchemy(app)

app.config['stripe_keys'] = {
    'secret_key': 'sk_test_x5mfe9BaXaNtFfZvNgRxZvsN',
    'publishable_key': 'pk_test_ZiFwe4nz9E1qadhXHCOiylgj'
}

stripe.api_key = app.config['stripe_keys']

app.config['SECRET_KEY'] = "3184cf50b884fd2828b2a084ac04d518f7c4f4e8f22f416a"
#app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://info3180:password@localhost/project-2"
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://///home/zamonth/Desktop/capstone/customer.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(os.path.dirname(os.path.dirname(__file__)), 'customer.db')
#app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://jqrggibohmdxak:dba53240a756e23bea6b448017b801467ffd707c25f1c45c94c5186f9bad464d@ec2-54-225-118-55.compute-1.amazonaws.com:5432/d96rrep6atbc84"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True # added just to suppress a warning
app.static_folder = 'static'
UPLOAD_FOLDER = './app/static/uploads'
DEFAULT_BIO = 'This person has not entered a bio.'

# print os.path.join(os.path.dirname(os.path.dirname(__file__)), 'customer.db')

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

# Flask-Login login manager
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


app.config.from_object(__name__)
from app import views