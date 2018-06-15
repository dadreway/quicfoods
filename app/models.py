from . import db, bcrypt
from generate import *
import datetime

class UserProfile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80))
    last_name = db.Column(db.String(80))
    username = db.Column(db.String(80))
    password = db.Column(db.String(255))
    age = db.Column(db.Integer)
    gender = db.Column(db.String(10))
    tags = db.Column(db.String(255))
    walletid = db.Column(db.String(30))
    balance = db.Column(db.Float)
    datecreated = db.Column(db.DateTime)


    def __init__(self, fName, lName, username, password, age, gender, tags):
        self.first_name = fName
        self.last_name = lName
        self.username = username
        self.password = bcrypt.generate_password_hash(password) 
        self.age = age
        self.gender = gender
        self.tags = tags
        self.walletid = generator()
        self.balance = 0
        self.datecreated = datetime.datetime.now()

        # # Creates password for db storage
        pw_hash = bcrypt.generate_password_hash('nanibois')
        bcrypt.check_password_hash(pw_hash, 'nanibois') # returns True

        # # Check Password for login
        candidate = 'secret'
        bcrypt.check_password_hash(pw_hash, candidate)

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        try:
            return unicode(self.id)  # python 2 support
        except NameError:
            return str(self.id)  # python 3 support

    def __repr__(self):
        return '<User %r>' % (self.username)

db.create_all()

class WishlistItems(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer)
    title = db.Column(db.String(255))
    description = db.Column(db.String(255))
    url = db.Column(db.Text)
    thumbnail_url = db.Column(db.Text)

    def __init__(self, owner_id, title, description, url, thumbnail_url):
        self.owner_id = owner_id
        self.title = title
        self.description = description
        self.url = url
        self.thumbnail_url = thumbnail_url