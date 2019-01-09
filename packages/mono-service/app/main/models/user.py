from .. import db


class Contact(db.Model):

    __tablename__ = 'contact'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(150), unique=True, nullable=False)
    phone = db.Column(db.String(100))
    message = db.Column(db.String(200))

    def __repr__(self):
        return 'User {}'.format(self.username)